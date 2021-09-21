import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProductCarousel } from './ProductCarousel';
import { Caroulsel } from './Carousel';

export default function Home() {
    return ( 
        <>
            <Caroulsel />
            <ProductCarousel title='Ofertas do Dia' path='/SearchProducts/' query='offer=day'/><br />
            <ProductCarousel title='Ofertas da Semana' path='/SearchProducts/' query='offer=week'/><br />
            <ProductCarousel title='Ofertas do Mês' path='/SearchProducts/' query='offer=month'/><br />
      
        </>
    )
}

