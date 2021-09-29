import Link from "next/link"
import { BreadcumbNav } from "./styles";
import { reloadProductList as reloadProductList } from '/store/slices/productsSlice';
import { useSelector } from 'react-redux';
import { useRouter } from "next/router";


export function BreadCumbs({ product }) {

  //  const product = useSelector(rootState => rootState.product);

    let categories = product.categories;


    if (!categories || categories === null)
        return <></>

    var CategoriesList = categories.map(function (category, index) {
        let sliced = categories.slice(0, index + 1);

        let path = '/search/' + sliced.join('/');
        return (
            <li key={index}>
                <Link href={path}><a>{category}</a></Link>
            </li >
        );
    });

    return (
        <BreadcumbNav aria-label="breadcrumb">
            <ol>
                <li><Link href='/search/'><a>Todos</a></Link></li>
                {CategoriesList}
            </ol>
        </BreadcumbNav>
    )
}

