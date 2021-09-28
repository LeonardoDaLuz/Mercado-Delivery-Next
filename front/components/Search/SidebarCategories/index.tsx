import react, { useEffect } from 'react';
import { CategoryTree, loadCategories } from '@slices/categoriesSlice';
import Breadcumbs from "./Breadcumb";
import { CategoriasAside, FaixaDePrecoForm, ListaCategorias, SidebarBuscaContainer } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { PriceRange } from './PriceRange';
import { Order } from './Order';
import { Ofertas } from './Ofertas';
import { useRouter } from 'next/router';
import queryObjToQueryString from '../../../utils/queryObjToQueryString';
import Link from 'next/link';
import { storeWrapper, AppStore, AppState } from 'store';



function SidebarCategories() {

    const categoriesTree = useSelector((rootState: AppState) => rootState.categories.data);
    const router = useRouter();
    const dispatch = useDispatch();
    const categoryArrayPath = router.query['category'] as string[];

    useEffect(() => {
        dispatch(loadCategories());
    }, [])

    function DrawListaAPartirDaCategoria(categoryBranch: CategoryTree) {

        let keys = Object.keys(categoryBranch).filter(key => (key.charAt(0) !== '_'));

        const currentCategoryPath = categoryArrayPath ? '/' + categoryArrayPath.join('/') : '/';

        const queryWithoutSearch = Object.assign({}, router.query);
        delete queryWithoutSearch['q'];

        let resultado = keys.map((key, index) => {

            return (
                <li key={key}>
                    <Link href={'/search' + currentCategoryPath + '/' + key + '?' + queryObjToQueryString(queryWithoutSearch)}>
                        <a>{key}</a>
                    </Link>
                </li>);
        });

        return keys.length == 0 ? <></> : <ListaCategorias>{resultado}</ListaCategorias>;
    }

    function selecionaSubcategoria(categoryTree: CategoryTree, categoryArrayPath: any): CategoryTree {

        let categoryCursor = categoryTree;

        for (let key in categoryArrayPath) {
            if (categoryArrayPath[key] !== undefined && categoryCursor[categoryArrayPath[key]] !== undefined) {
                categoryCursor = categoryCursor[categoryArrayPath[key]];
            } else {
                break;
            }
        }
        return categoryCursor;
    }


    const isRoot = !categoryArrayPath || categoryArrayPath.length === 0;
    const selectedCategoryBranch = selecionaSubcategoria(categoriesTree, categoryArrayPath);
    const title = router.query['q'] ? 'Categorias' : categoryArrayPath ? categoryArrayPath[categoryArrayPath.length - 1] : 'Todos';
   // console.log('categoria', selectedCategoryBranch);
    return (
        <CategoriasAside>
            <IndicadorDeBusca />
            {!isRoot &&
                <Breadcumbs />
            }
            <h3>{title}</h3>
            {DrawListaAPartirDaCategoria(selectedCategoryBranch)}
            <PriceRange />
            <Order />
            <Ofertas />
        </CategoriasAside>
    )


}

SidebarCategories.getReduxProps = async (store: AppStore) => {
    //await store.dispatch(loadCategories());
};

function IndicadorDeBusca() {

    const router = useRouter();

    if (!router.query['q'])
        return <></>

    return (
        <SidebarBuscaContainer>
            <h3>Busca</h3>
            <div>Resultados para <strong>{router.query['q']}</strong></div>
        </SidebarBuscaContainer>
    );
}



export default SidebarCategories;

