import { Flex, InputBlock, RegisterSuccessContainer } from '@components/Register/style';
import DefaultHeaderAndFooter from '@layouts/DefaultHeaderAndFooter';
import { ReactElement, useEffect, useState } from 'react';
import { AdicionarRemoverDoCarrinho, PedidoOptions, AddressConfigContainer, ErrorLabel, PaymentContainer, MyChartContainer, Container, PayOnDelivery, PayWithPix, PixQRCode, PixQRCodeCopyInput, PayWithCreditCard } from '@components/Purchases/style';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@store';
import { adicionarProdutoAoCarrinho, ProductRegister } from '@slices/chartSlice';
import Image, { ImageLoader } from 'next/image';
import Link from 'next/link';
import moveElementFromTo from '@utils/moveElementFromTo';
import { custoTotalNoCarrinho } from '@components/Header';
import { ButtonFlat } from '@globalStyleds';
import { useFormik } from 'formik';
import { autoFillWithViaCEP, formatCEP, formatCPF, IsValidCEP, isValidCPF, isValidName, maskTelephone } from '@utils/formUtils';
import router, { useRouter } from 'next/router';
import QRCodePlaceholder from "@assets/svg/QRCodePlaceholder.svg"
import PubSub from 'pubsub-js';
import { CloseModal, ShowModal } from '@components/Modal';
import { ModalConfirmedPaymentContainer } from '@components/Purchases/style';
import { confirmPaymentThunk } from '@slices/purchasesSlice';
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
    //forma_de_pagamento: "" | "na_entrega" | "cartao_de_credito" | "pix" | "boleto"
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

interface PaymentType {
    form_of_payment: "on_delivery" | "credit" | "pix" | "boleto" | "undefined";
}

function MyChart() {

    const router = useRouter();
    const purchase = useSelector((rootState: AppState) => rootState.purchases[router.query.id as string]);
    const dispatch = useDispatch();
    const [showLoaderWheel, setShowLoaderWheel] = useState<boolean>(false);

    const formik = useFormik<PaymentType>({
        initialValues: {
            form_of_payment: "undefined"
        },
        onSubmit: (values) => {

        }
    })

    return (
        <Container>
            <PaymentContainer>
                <h2>Pagamento</h2>
                <label htmlFor="form_of_payment">Forma de pagamento</label>
                <select id='form_of_payment' name='form_of_payment' onChange={formik.handleChange} value={formik.values.form_of_payment}>
                    <option value="">Selecionar</option>
                    <option value="on_delivery">Pagar na entrega</option>
                    <option value="credit">Cartão de crédito (Indisponível)</option>
                    <option value="boleto">Boleto (Indisponível)</option>
                    <option value="pix">Pix (Indisponível)</option>
                </select>{
                    (formik.values.form_of_payment === "on_delivery" &&
                        <>
                            <PayOnDelivery>
                                Pague no momento da entrega, com dinheiro ou cartão de débito ou crédito

                            </PayOnDelivery>
                            <PedidoOptions>
                                <ButtonFlat onClick={() => router.back()}>Voltar</ButtonFlat>
                                <ButtonFlat onClick={() => {
                                    setShowLoaderWheel(true);
                                    dispatch(confirmPaymentThunk(
                                        purchase,
                                        () => {
                                            setShowLoaderWheel(false);
                                            ShowModal(
                                                <ModalConfirmedPaymentContainer>
                                                    <div>
                                                        <strong>Pagamento confirmado!</strong>
                                                        <b>Agora é só aguardar!</b><br />
                                                        Acompanhe o status de seu pedido em <Link href="/purchases" ><a onClick={CloseModal}>Meus pedidos</a></Link>
                                                    </div>
                                                    <ButtonFlat onClick={() => { CloseModal(); router.back() }}>Ok</ButtonFlat>
                                                </ModalConfirmedPaymentContainer>)
                                        },
                                        () => {

                                        }
                                    ))

                                }}>
                                    {showLoaderWheel && <LoaderWheel />}
                                    Confirmar meio de pagamento
                                </ButtonFlat>
                            </PedidoOptions>
                        </>

                    ) ||
                    (formik.values.form_of_payment === "credit" &&
                        <>
                            <PayWithCreditCard>
                                <div>
                                    <label htmlFor="card_number">Numero do cartão</label>
                                    <input id="card_number" name="card_number" />
                                </div>
                                <div>
                                    <label htmlFor="card_owner_name">Nome no cartão</label>
                                    <input id="card_owner_name" name="card_owner_name" />
                                </div>
                                <div style={{ flex: "0 1 155px" }}>
                                    <label htmlFor="expiration_date">Data de expiração</label>
                                    <input id="expiration_date" name="card_number" />
                                </div>
                                <div style={{ flex: "0 1 155px" }}>
                                    <label htmlFor="cvc">Código de segurança</label>
                                    <input id="cvc" name="cvc" />
                                </div>

                            </PayWithCreditCard>
                            <PedidoOptions>
                                <ButtonFlat onClick={() => router.back()}>Voltar</ButtonFlat>
                                <ButtonFlat disabled onClick={() => { }}>
                                    Confirmar pagamento
                                </ButtonFlat>
                            </PedidoOptions>
                        </>

                    ) ||
                    (formik.values.form_of_payment === "pix" &&
                        <>
                            <PayWithPix>
                                <h3>Escaneie este código para pagar</h3>
                                <p>1: Acesse seu Internet Banking ou App de pagamentos</p>
                                <p>2: Escolha pagar via Pix</p>
                                <p>3: Escaneie o seguinte código</p>
                                <PixQRCode>
                                    <Image src={QRCodePlaceholder} width={200} height={200} />

                                </PixQRCode>
                                <p>Pague e será creditado na hora</p>
                                <hr></hr>
                                <h3>Ou copie este código QR para fazer o pagamento</h3>
                                <p>Escolha pagar via pix pelo seu Internet Banking ou app de pagamentos. Depois cole o seguinte código:</p>
                                <PixQRCodeCopyInput>
                                    <input type="text" name="QRCodeCopy" value="0002015654814br.gov.bcb.pix0556pix_marketplace@5546322896542254-546" />
                                    <ButtonFlat>Copiar</ButtonFlat>
                                </PixQRCodeCopyInput>
                            </PayWithPix>
                            <PedidoOptions>
                                <ButtonFlat onClick={() => router.back()}>Voltar</ButtonFlat>
                                <ButtonFlat disabled onClick={() => {

                                }}>
                                    Concluir compra
                                </ButtonFlat>
                            </PedidoOptions>
                        </>

                    )
                }

            </PaymentContainer>
        </Container>

    )
}

const myImageLoader: ImageLoader = ({ src, width, quality }) => {
    return `http://localhost:3001/${src}?w=${width}&q=${quality || 75}`
}

function Product({ product }: { product: ProductRegister }) {

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
                        dispatch(adicionarProdutoAoCarrinho(product.data!._id, -1));
                        animarAdicao(e, -1);
                    }}
                >-</button>
                <div>{product.quantidade}</div>
                <button
                    onClick={(e) => {
                        dispatch(adicionarProdutoAoCarrinho(product.data!._id, 1));
                        animarAdicao(e, +1);
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

