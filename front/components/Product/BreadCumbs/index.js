import Link from "next/link"
import { BreadcumbNav } from "./styles";
import { reloadProductList as reloadProductList } from '/store/slices/productsSlice';
import { useSelector } from 'react-redux';
import { useRouter } from "next/router";


function BreadCumbs_() {

    const product = useSelector(rootState => rootState.product);

    let categories = product.categories;


    if (!categories || categories === null)
        return <></>

    var CategoriesList = categories.map(function (category, index) {
        let sliced = categories.slice(0, index + 1);

        let path = '/SearchProducts/' + sliced.join('/');
        return (
            <li key={index}>
                <Link href={path}><a>{category}</a></Link>
            </li >
        );
    });

    return (
        <BreadcumbNav aria-label="breadcrumb">
            <ol>
                <li><Link href='/SearchProducts/'><a>Todos</a></Link></li>
                {CategoriesList}
            </ol>
        </BreadcumbNav>
    )
}


export const BreadCumbs = BreadCumbs_;
