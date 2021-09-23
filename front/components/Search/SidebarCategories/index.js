import react, { useEffect } from 'react';
import { loadCategories } from '../../../store/actions/categorias';
import Breadcumbs from "./Breadcumb";
import { CategoriasAside, FaixaDePrecoForm, ListaCategorias } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { PriceRange } from './PriceRange';
import { Order } from './Order';
import { Ofertas } from './Ofertas';
import { useRouter } from 'next/router';
import queryObjToQueryString from '../../../utils/queryObjToQueryString';
import Link from 'next/link';

function SidebarCategories() {

    const categories = useSelector(rootState => rootState.categories.data);
    const router = useRouter();
    const dispatch = useDispatch();
    const categoryPathObj = router.query['category'];

    useEffect(() => {
        dispatch(loadCategories());
    }, [])

    function DrawListaAPartirDaCategoria(objeto) {

        let keys = Object.keys(objeto).filter(key => (key.charAt(0) !== '_'));

        const currentCategoryPath = categoryPathObj ? '/' + categoryPathObj.join('/') : '/';

        let resultado = keys.map((key, index) => {

            return (
                <li key={key}>
                    <Link href={'/search/' + currentCategoryPath + '/' + key + '?' + queryObjToQueryString(router.query)}>
                        <a>{key}</a>
                    </Link>
                </li>);
        });

        return keys.length == 0 ? <></> : <ListaCategorias>{resultado}</ListaCategorias>;
    }

    function selecionaSubcategoria(categorias, pathObj) {
        let categoriaCursor = categorias;

        for (let key in pathObj) {
            if (pathObj[key] !== undefined && categoriaCursor[pathObj[key]] !== undefined) {
                categoriaCursor = categoriaCursor[pathObj[key]];
            } else {
                break;
            }
        }
        return categoriaCursor;
    }


    const isRoot = categoryPathObj === undefined;
    const categoriaSelecionada = selecionaSubcategoria(categories, categoryPathObj);
    const title = categoryPathObj ? categoryPathObj[categoryPathObj.length - 1] : 'Todos';

    return (
        <CategoriasAside>
            {!isRoot &&
                <Breadcumbs />
            }
            <h3>{title}</h3>
            {DrawListaAPartirDaCategoria(categoriaSelecionada)}
            <PriceRange />
            <Order />
            <Ofertas />
        </CategoriasAside>
    )


}



export default SidebarCategories;

