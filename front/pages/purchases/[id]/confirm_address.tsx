import { Flex, InputBlock, RegisterSuccessContainer } from '@components/Register/style';
import DefaultHeaderAndFooter from '@layouts/DefaultHeaderAndFooter';
import { ReactElement, useState } from 'react';
import { AdicionarRemoverDoCarrinho, PedidoOptions, AddressConfigContainer, ErrorLabel, PaymentContainer, MyChartContainer, Container, PayOnDelivery, PayWithPix, PixQRCode, PixQRCodeCopyInput } from '@components/MyChart/style';
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
import { useRouter } from 'next/router';
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
    forma_de_pagamento: "" | "na_entrega" | "cartao_de_credito" | "pix" | "boleto"
}


type AllPropsAsString<T> = {
    [P in keyof T as string]: string
}

enum StepType {
    Chart,
    Address,
    Payment,
    purchaseCompleted
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
    const chart = useSelector((rootState: AppState) => rootState.carrinho);
    const [step, setStep] = useState<StepType>(StepType.Chart);
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

    const produtos = Object.keys(chart.produtos).map(key => chart.produtos[key]);

    let content;

    switch (step) {
        case StepType.Chart:
            content = (
                <MyChartContainer>
                    <h1>Meu Carrinho</h1>
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
                            {produtos.map(produto => <Product product={produto} />)}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={4}>Total</td>
                                <td colSpan={4}>{custoTotalNoCarrinho(chart)}</td>
                            </tr>
                        </tfoot>
                    </table>
                    <PedidoOptions>
                        <ButtonFlat>Limpar carrinho</ButtonFlat>
                        <ButtonFlat onClick={() => router.back()}>Voltar</ButtonFlat>
                        <ButtonFlat onClick={() => setStep(StepType.Address)}>Confirmar pedido</ButtonFlat>
                    </PedidoOptions>
                </MyChartContainer>
            );
            break;
        case StepType.Address:
            content = (
                <AddressConfigContainer>
                    <h2>Frete</h2>
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
                        <ButtonFlat onClick={() => setStep(StepType.Chart)}>Voltar</ButtonFlat>
                        <ButtonFlat onClick={() => setStep(StepType.Payment)}>Confirmar endereço</ButtonFlat>
                    </PedidoOptions>

                </AddressConfigContainer>
            );
            break;
        case StepType.Payment:
            content = (
                <PaymentContainer>
                    <h2>Pagamento</h2>
                    <label htmlFor="forma_de_pagamento">Forma de pagamento</label>
                    <select id='forma_de_pagamento' name='forma_de_pagamento' onChange={formik.handleChange} value={formik.values.forma_de_pagamento}>
                        <option value="">Selecionar</option>
                        <option value="na_entrega">Pagar na entrega</option>
                        <option value="cartao_de_credito">Cartão de crédito (Indisponível)</option>
                        <option value="boleto">Boleto (Indisponível)</option>
                        <option value="pix">Pix (Indisponível)</option>
                    </select>{
                        (formik.values.forma_de_pagamento === "na_entrega" &&
                            <>
                                <PayOnDelivery>
                                    Pague no momento da entrega, com dinheiro ou cartão de débito ou crédito

                                </PayOnDelivery>
                                <PedidoOptions>
                                    <ButtonFlat onClick={() => setStep(StepType.Address)}>Voltar</ButtonFlat>
                                    <ButtonFlat onClick={() => setStep(StepType.purchaseCompleted)}>
                                        Confirmar meio de pagamento
                                    </ButtonFlat>
                                </PedidoOptions>
                            </>

                        ) ||
                        (formik.values.forma_de_pagamento === "pix" &&
                            <>
                                <PayWithPix>
                                    <h3>Escaneie este código para pagar</h3>
                                    <p>1: Acesse seu Internet Banking ou App de pagamentos</p>
                                    <p>2: Escolha pagar via Pix</p>
                                    <p>3: Escaneie o seguinte código</p>
                                <PixQRCode>
                                    <Image src={QRCodePlaceholder} width={200} height={200}/>
                                    
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
                                    <ButtonFlat onClick={() => setStep(StepType.Address)}>Voltar</ButtonFlat>
                                    <ButtonFlat onClick={() => setStep(StepType.purchaseCompleted)}>
                                        Concluir compra
                                    </ButtonFlat>
                                </PedidoOptions>
                            </>

                        )
                    }

                </PaymentContainer>
            )
    }

    return (
        <Container>
            {content}
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

