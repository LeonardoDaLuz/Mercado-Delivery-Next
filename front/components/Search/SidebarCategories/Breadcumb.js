
import react, { Component } from 'react';
import Link from "next/link";
//import './Breadcumb.css';
import { BreadcumbList } from './styles';
import { reloadProductList } from '@actions/products';
import { bindActionCreators } from 'redux';
import queryObjToQueryString from '../../../utils/queryObjToQueryString';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

function BreadCumbs() {

    const dispatch = useDispatch();
    const router = useRouter();
    const queryString = queryObjToQueryString(router.query);
    const path = router.query['category'];

    const links = path.map((item, index) => {
        let newLink = '/search/'+path.slice(0, index + 1).join('/');
        return newLink;
    })

    var breadLis = path.map(function (cat, index) {        
        return (<li key={index}><Link key={index} href={links[index]} onClick={() => { dispatch(reloadProductList(links[index], queryString, 12)) }}><a>{cat}</a></Link></li>);     
    });

    return (
        <BreadcumbList>
            <ul>
                <li key='0'><Link href='/search'><a>Todos</a></Link></li>
                {breadLis}
            </ul>
        </BreadcumbList>
    )
}

export default BreadCumbs;