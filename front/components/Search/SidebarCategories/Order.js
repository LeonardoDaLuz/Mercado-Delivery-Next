import { useState } from 'react';
import { Input } from '../../../globalStyleds';
import { OrdemSelectForm } from './styles';
import { filtraFloat } from '../../../utils/InputFilters';
import { loadMoreProducts } from '../../../store/actions/products';
import queryObjToQueryString from '../../../utils/queryObjToQueryString';
import { useRouter } from 'next/router';

function Order_() {

    const router = useRouter();
    const queryObj = router.query;
    let sort = queryObj['sort'];
    sort = sort === null ? '' : sort;

    function aplicaOrdem(e) {

        queryObj['sort'] = e.target.value;
        router.push(router.pathname + "?" + queryObjToQueryString(queryObj));
      }
    return (<>
        <h4>Ordem</h4>
        <OrdemSelectForm >
            <select name="ordem" id="ordem" value={sort} onChange={aplicaOrdem}>
                <option value="nenhum">Nenhum</option>
                <option value="menorPreco">Menor Preço</option>
                <option value="maiorPreco">Maior Preço</option>
            </select>
        </OrdemSelectForm>
    </>);
};


export const Order = (Order_);