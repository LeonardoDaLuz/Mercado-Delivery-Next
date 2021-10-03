import { RegisterSuccessContainer } from '@components/Register/style';
import DefaultHeaderAndFooter from '@layouts/DefaultHeaderAndFooter';
import { ReactElement } from 'react';
import { MyChartContainer } from '@components/MyChart/style';
import { useSelector } from 'react-redux';
import { AppState } from '@store';
import { ProductRegister } from '@slices/chartSlice';
import Image, { ImageLoader } from 'next/image';

function RegisterSuccess() {

    const chart = useSelector((rootState: AppState) => rootState.carrinho);

    const produtos = Object.keys(chart.produtos).map(key => chart.produtos[key]);
    return (
        <MyChartContainer>
            <h1>Meu Carrinho</h1>
            <table>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {produtos.map(produto=><Product product={produto} />)}
              
                </tbody>
            </table>
        </MyChartContainer>

    )
}

const myImageLoader: ImageLoader = ({ src, width, quality }) => {
    return `http://localhost:3001/${src}?w=${width}&q=${quality || 75}`
}
  
function Product({ product }: { product: ProductRegister }) {
    return (<tr>
        <td>
            {<Image loader={myImageLoader} src={"/"+product.data!.imgs[0]} width={60} height={60} />}
        </td>
        <td>
            {product.data?.title}
        </td>
        <td>
            {product.data?.price}
        </td>
        <td>
            {product.quantidade}
        </td>
    </tr>)
}


RegisterSuccess.getLayout = (page: ReactElement) => {
    return (
        <DefaultHeaderAndFooter>
            {page}
        </DefaultHeaderAndFooter>
    )
}

export default RegisterSuccess;

