import { Flex, InputBlock, RegisterSuccessContainer } from '@components/Register/style';
import DefaultHeaderAndFooter from '@layouts/DefaultHeaderAndFooter';
import { ReactElement, useEffect, useState } from 'react';
import { AdicionarRemoverDoCarrinho, PedidoOptions, AddressConfigContainer, ErrorLabel, PaymentContainer, MyChartContainer, Container, PayOnDelivery, PayWithPix, PixQRCode, PixQRCodeCopyInput } from '@components/Purchases/style';
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

function MyChart() {

    const router = useRouter();
    const chart = useSelector((rootState: AppState) => rootState.purchases[router.query.id as string]);

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
        },
        validate,
        onSubmit: (values): void => {

        },
        validateOnMount: true
    });

    useEffect(() => {

        const address = chart.address;

        formik.setValues({
            cep: address.cep,
            street: address.street,
            city: address.city,
            number: address.number.toString(),
            district: address.district,
            complement: address.complement,
            cpf: address.cpf,
            name: address.name,
            telephone: address.telephone,
        })
    }, [chart])

    return (
        <Container>
            <AddressConfigContainer>
       
                <h2>Frete <span>#{(router.query.id as string).toUpperCase()}</span></h2>
         
                <form onSubmit={formik.handleSubmit}>

                    <Flex>
                        <InputBlock>
                            <label htmlFor='cep'>CEP:</label>
                            {formik.errors['cep'] && <ErrorLabel> {'  *' + formik.errors['cep']}</ErrorLabel>}
                            <input id='cep' name='cep' type='text' onChange={(e) => {
                                e.target.value = formatCEP(e.target.value);
                                autoFillWithViaCEP(e, formik);
                                formik.handleChange(e)
                            }


                            } value={formik.values.cep} />
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor='street'>Rua:</label>
                            {formik.errors['street'] && <ErrorLabel> {'  *' + formik.errors['street']}</ErrorLabel>}
                            <input id='street' name='street' type='text' onChange={formik.handleChange} value={formik.values.street} />
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor='district'>Bairro:</label>
                            {formik.errors['district'] && <ErrorLabel> {'  *' + formik.errors['district']}</ErrorLabel>}
                            <input id='district' name='district' type='text' onChange={formik.handleChange} value={formik.values.district} />
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor='city'>Cidade:</label>
                            {formik.errors['city'] && <ErrorLabel> {'  *' + formik.errors['city']}</ErrorLabel>}
                            <input id='city' name='city' type='text' onChange={formik.handleChange} value={formik.values.city} />
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor='number'>Numero:</label>
                            {formik.errors['number'] && <ErrorLabel> {'  *' + formik.errors['number']}</ErrorLabel>}
                            <input id='number' name='number' type='text' onChange={(e) => {
                                e.target.value = (parseInt(e.target.value) || '').toString();
                                formik.handleChange(e)
                            }}
                                value={formik.values.number} />
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor='complement'>Complemento:</label>
                            {formik.errors['complement'] && <ErrorLabel> {'  *' + formik.errors['complement']}</ErrorLabel>}
                            <input id='complement' name='complement' type='text' onChange={formik.handleChange} value={formik.values.complement} />
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor='name'>Nome:</label>
                            {formik.errors['name'] && <ErrorLabel> {'  *' + formik.errors['name']}</ErrorLabel>}
                            <input id='name' name='name' type='text' onChange={formik.handleChange} value={formik.values.name} />
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor='cpf'>CPF:</label>
                            {formik.errors['cpf'] && <ErrorLabel> {'  *' + formik.errors['cpf']}</ErrorLabel>}

                            <input id='cpf' name='cpf' type='text' onChange={(e) => { e.target.value = formatCPF(e.target.value); formik.handleChange(e) }} value={formik.values.cpf} />
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor='telephone'>Telefone:</label>
                            {formik.errors['telephone'] && <ErrorLabel> {'  *' + formik.errors['telephone']}</ErrorLabel>}
                            <input id='telephone' name='telephone' type='tel' onChange={(e) => {
                                maskTelephone(e);
                                formik.handleChange(e);
                            }

                            } value={formik.values.telephone} />
                        </InputBlock>
                    </Flex>
                </form>
                <PedidoOptions>
                    <ButtonFlat onClick={() => router.back()}>Voltar</ButtonFlat>
                    <ButtonFlat onClick={() => {}}>Confirmar endereço</ButtonFlat>
                </PedidoOptions>

            </AddressConfigContainer>
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

