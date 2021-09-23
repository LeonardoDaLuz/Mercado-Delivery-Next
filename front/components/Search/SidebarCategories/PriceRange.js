import { useState } from 'react';
import { Input } from '@globalStyleds';
import { FaixaDePrecoForm } from './styles';
import queryObjToQueryString from '../../../utils/queryObjToQueryString';
import { useRouter } from 'next/router';

function PriceRange_() {

    const router = useRouter();

    const queryObj = router.query;
    const categoryPathObj = queryObj['category'] || [];
    const currentPathString = '/search/' + categoryPathObj.join('/');

    
    let urlSearchParams = new URLSearchParams(router.asPath.split("?").pop());
    const [minimo, _setMinimo] = useState(filtraFloat(urlSearchParams.get('menorPreco')));
    const [maximo, _setMaximo] = useState(filtraFloat(urlSearchParams.get('maiorPreco')));

    const setMinimo = (e) => { _setMinimo(filtraFloat(e.target.value)); }

    const setMaximo = (e) => { _setMaximo(filtraFloat(e.target.value)); }


    function aplicaFaixaDePreco(e) {

        e.preventDefault();

        if (minimo != "")
            queryObj['menorPreco'] = filtraFloat(minimo);
        else
            delete queryObj['menorPreco'];

        if (maximo != "")
            queryObj["maiorPreco"] = filtraFloat(maximo);
        else
            delete queryObj["maiorPreco"];

        router.push(currentPathString + "?" + queryObjToQueryString(queryObj));
    }

    return (<>
        <h4>Preço</h4>
        <FaixaDePrecoForm onSubmit={aplicaFaixaDePreco}>
            <Input placeholder="Mínimo" value={minimo} onChange={setMinimo} />-
            <Input placeholder="Máximo" value={maximo} onChange={setMaximo} />
            <button type="submit">Ir</button>
        </FaixaDePrecoForm>
    </>);
};

export const PriceRange = PriceRange_;

function filtraFloat(number) {
    let _number = parseFloat(number);
    return (_number === 0 || isNaN(number) || number === null ? "" : number)
}