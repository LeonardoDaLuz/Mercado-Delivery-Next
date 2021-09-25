

import { CategoryManager_ } from "/components/CategoryManager/style";
import { Row} from "../../globalStyleds";
import { useEffect } from "react";
import React from "react";
import { carregaCategorias } from "@actions/categorias";
import { CategoryBreadcrumbs } from '/components/CategoryManager/CategoryBreadcrumbs';
import { drawPropertiesAsFolder } from "/components/CategoryManager/drawPropertiesAsFolder";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import DefaultHeaderAndFooter from "../../layouts/DefaultHeaderAndFooter";

function CategoryManager() {

    const categories = useSelector(rootState => rootState.categories.data);
    const dispatch = useDispatch();
    const router = useRouter();

    let pathAsArray = router.query.categoryPath || [];

    let pathAsString = pathAsArray.join('.');


    if (pathAsString.charAt(pathAsString.length - 1) === '.')
        pathAsString = pathAsString.slice(0, -1);


    useEffect(()=> {
        dispatch(carregaCategorias());
    }, [])

    return (
        <CategoryManager_>
            <h1>Gerenciar Categorias</h1>
            <CategoryBreadcrumbs objectPath={pathAsString} />

            <Row style={{ flexWrap: 'wrap' }}>
                {
                    drawPropertiesAsFolder(categories, pathAsString, pathAsArray)
                }

            </Row>
        </CategoryManager_>
    );
};

CategoryManager.getLayout = (page) => {
    return (
      <DefaultHeaderAndFooter>
        {page}
      </DefaultHeaderAndFooter>
    )
}

export default CategoryManager;