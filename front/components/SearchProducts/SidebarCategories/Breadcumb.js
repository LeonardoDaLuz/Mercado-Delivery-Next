
import react, { Component } from 'react';
import { Link } from "next/link";
import './Breadcumb.css';
import { BreadcumbList } from './styles';
import { reloadProductList } from '@actions/products';
import { bindActionCreators } from 'redux';
import { connect, useStore } from 'react-redux';
import queryObjToQueryString from '../../../utils/queryObjToQueryString';

function BreadCumbs({ path }) {

    const dispatch = useDispatch();
    const router = useRouter;
    const queryString = queryObjToQueryString(router.query);
    path = path.split("/");
    path.shift();

    let links = path.map((item, index) => {
        let newLink = path.slice(0, index + 1).join('/');
        return "/" + newLink;
    })
    path[0] = "Todos";
    var breadLis = path.map(function (cat, index) {

        return (<li key={index}><Link key={index} href={links[index]} onClick={() => { dispatch(reloadProductList(links[index], queryString, 12)) }}><a>{cat}</a></Link></li>);
    });

    return (
        <BreadcumbList>
            <ul>
                {breadLis}
            </ul>
        </BreadcumbList>
    )
}


const mapDispatchToProps = dispatch =>
    bindActionCreators({ reloadProductList }, dispatch);

export default BreadCumbs;