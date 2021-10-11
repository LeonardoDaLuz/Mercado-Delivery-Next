import { Flex, InputBlock, RegisterSuccessContainer } from '@components/Register/style';
import DefaultHeaderAndFooter from '@layouts/DefaultHeaderAndFooter';
import { ReactElement, useState } from 'react';
import { AdicionarRemoverDoCarrinho, PedidoOptions, AddressConfigContainer, ErrorLabel, PaymentContainer, MyChartContainer, Container, PayOnDelivery, PayWithPix, PixQRCode, PixQRCodeCopyInput, TitleEditOrder } from '@components/Purchases/style';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@store';
import { adicionarProdutoAoCarrinho, ChartState, restorePurchaseToMyChartThunk, ProductRegister } from '@slices/chartSlice';
import Image, { ImageLoader } from 'next/image';
import Link from 'next/link';
import moveElementFromTo from '@utils/moveElementFromTo';
import { custoTotalNoCarrinho } from '@components/Header';
import { ButtonFlat } from '@globalStyleds';
import { useFormik } from 'formik';
import { autoFillWithViaCEP, formatCEP, formatCPF, IsValidCEP, isValidCPF, isValidName, maskTelephone } from '@utils/formUtils';
import { useRouter } from 'next/router';
import QRCodePlaceholder from "@assets/svg/QRCodePlaceholder.svg"
import { addProductQuantityOnPurcrhase, loadPurchasesThunk, Purchase, savePurchaseThunk } from '@slices/purchasesSlice';
import LoaderWheel from '@components/LoaderWheel/LoaderWheel';


interface AddressConfig {
    name: string
    cep: string,
    street: string,
    city: string,
    number: string,
    district: string,
    complement: string,
    telephone: string,
    cpf: string,
    forma_de_pagamento: "" | "na_entrega" | "cartao_de_credito" | "pix" | "boleto"
}


type AllPropsAsString<T> = {
    [P in keyof T as string]: string
}

const validate = (values: AddressConfig) => {

    const errors: AllPropsAsString<AddressConfig> = {};

    if (!values.name)
        errors.name = 'Requerido';
    else if (values.name.length < 7)
        errors.name = 'Deve conter pelo menos 3 caracteres';


    if (!values.cpf)
        errors.cpf = 'Requerido';
    else if (values.cpf.length != 14) {
        errors.cpf = 'Deve conter 11 numeros';
    }
    else if (!isValidCPF(values.cpf)) {

        errors.cpf = 'CPF inválido';
    }

    if (!values.cep)
        errors.cep = 'Requerido';
    else if (!IsValidCEP(values.cep))
        errors.cep = 'Cep invalido';

    if (!values.street)
        errors.street = 'Requerido';

    if (!values.district)
        errors.district = 'Requerido';

    if (!values.city)
        errors.city = 'Requerido';

    if (!values.number)
        errors.number = 'Requerido';

    if (!values.telephone)
        errors.telefone = 'Requerido';

    return errors;
}

function MyChart() {

    const router = useRouter();
    const dispatch = useDispatch();

    const chart: ChartState | Purchase = useSelector((rootState: AppState) => {
        if (router.query.id === "mychart")
            return rootState.carrinho;
        else
            return rootState.purchases[router.query.id as string];
    });

    const [showSaveLoaderWheel, setShowSaveLoaderWheel] = useState(false);
    const [showRestoreToChartLoaderWheel, setShowRestoreToChartLoaderWheel] = useState(false);

    const formik = useFormik<AddressConfig>({
        initialValues: {
            cep: '',
            street: '',
            city: '',
            number: '',
            district: '',
            complement: '',
            cpf: '',
            name: '',
            telephone: '(__)_____-____',
            forma_de_pagamento: ''
        },
        validate,
        onSubmit: (values): void => {

        },
        validateOnMount: true
    });

    if (!chart) {
        return (
            <Container>
                <LoaderWheel width={80} height={80} style={{ position: 'absolute', left: "calc(50% - 40px)", top: "calc(50% - 40px)", display: 'block', color: "#0f800f" }} />
            </Container>
        )
    }

    const produtos = Object.keys(chart.produtos).map(key => chart.produtos[key]);

    let content;

    const isMyChart = router.query.id === "mychart";

    return (
        <Container>
            <MyChartContainer>
                {
                    (isMyChart && <h1>Meu Carrinho</h1>) ||
                    <TitleEditOrder><h1>Editar Pedido</h1><span>#{router.query.id}</span></TitleEditOrder>
                }

                <table>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Total</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map(produto => <ProductOnList product={produto} isMyChart={isMyChart} purchaseId={router.query.id as string} />)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={4}>Total</td>
                            <td colSpan={4}>{custoTotalNoCarrinho(chart)}</td>
                        </tr>
                    </tfoot>
                </table>
                <PedidoOptions>
                    {(router.query.id === 'mychart' &&
                        <>
                            <ButtonFlat>Limpar carrinho</ButtonFlat>
                            <ButtonFlat onClick={() => router.back()}>Voltar</ButtonFlat>
                            <ButtonFlat onClick={() => {
                                setShowSaveLoaderWheel(true);
                                dispatch(restorePurchaseToMyChartThunk(chart, () => setShowSaveLoaderWheel(false)))
                            }}>
                                {showSaveLoaderWheel && <LoaderWheel />}
                                Confirmar pedido
                            </ButtonFlat>
                        </>) ||
                        <>
                            <ButtonFlat onClick={() => router.back()}>Voltar</ButtonFlat>
                            <ButtonFlat
                                onClick={() => {
                                    setShowRestoreToChartLoaderWheel(true);
                                    dispatch(restorePurchaseToMyChartThunk(chart as Purchase, () => {
                                        setShowRestoreToChartLoaderWheel(false);
                                        router.push('/purchases/')
                                    }))
                                }}>
                                {showRestoreToChartLoaderWheel && <LoaderWheel />}
                                Restaurar para o carrinho
                            </ButtonFlat>
                            <ButtonFlat
                                onClick={() => {
                                    setShowSaveLoaderWheel(true);
                                    dispatch(savePurchaseThunk(chart as Purchase, () => {
                                        setShowSaveLoaderWheel(false);
                                        router.push('/purchases/')
                                    }))
                                }}>
                                {showSaveLoaderWheel && <LoaderWheel />}
                                Salvar pedido
                            </ButtonFlat>
                        </>
                    }
                </PedidoOptions>
            </MyChartContainer>
        </Container>

    )
}

const myImageLoader: ImageLoader = ({ src, width, quality }) => {
    return `http://localhost:3001/${src}?w=${width}&q=${quality || 75}`
}

function ProductOnList({ product, isMyChart, purchaseId }: { product: ProductRegister, isMyChart: boolean, purchaseId: string }) {

    const dispatch = useDispatch();

    return (<tr>
        <td>
            <Link href={"/product/" + product.data?._id}>
                <a>
                    {<Image loader={myImageLoader} src={"/" + product.data!.imgs[0]} width={60} height={60} />}
                </a>
            </Link>
        </td>
        <td>
            <Link href={"/product/" + product.data?._id}>
                <a>
                    {product.data?.title}
                </a>
            </Link>
        </td>
        <td>
            {product.data?.price.toFixed(2)}
        </td>
        <td>
            {(product.data!.price * product.quantidade).toFixed(2)}
        </td>
        <td>
            <AdicionarRemoverDoCarrinho>
                <button
                    disabled={product.quantidade < 1}
                    onClick={(e) => {
                        if (isMyChart) {
                            dispatch(adicionarProdutoAoCarrinho(product.data!._id, -1));
                            animarAdicao(e, -1);
                        } else {
                            dispatch(addProductQuantityOnPurcrhase({ purchaseId, quantity: -1, productId: product.data!._id }));
                        }
                    }}
                >-</button>
                <div>{product.quantidade}</div>
                <button
                    onClick={(e) => {
                        if (isMyChart) {
                            dispatch(adicionarProdutoAoCarrinho(product.data!._id, 1));
                            animarAdicao(e, +1);
                        } else {
                            dispatch(addProductQuantityOnPurcrhase({ purchaseId, quantity: +1, productId: product.data!._id }));
                        }
                    }
                    }>+</button>
            </AdicionarRemoverDoCarrinho>
        </td>
    </tr>)
}

async function animarAdicao(e: React.MouseEvent<HTMLElement>, dir = 1) {
    let img = (e.target as HTMLElement).parentElement!.parentElement!.parentElement!.querySelector("img[src^=http]");
    let carrinho = document.querySelector("#carrinho");
    moveElementFromTo(img, img, carrinho, dir);
}


MyChart.getLayout = (page: ReactElement) => {
    return (
        <DefaultHeaderAndFooter>
            {page}
        </DefaultHeaderAndFooter>
    )
}

export default MyChart;

