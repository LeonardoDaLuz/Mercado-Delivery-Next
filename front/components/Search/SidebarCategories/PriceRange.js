import { useState } from 'react';
import { Input } from '@globalStyleds';
import { FaixaDePrecoForm } from './styles';
import queryObjToQueryString from '../../../utils/queryObjToQueryString';
import { useRouter } from 'next/router';

function PriceRange_({ location, carregaMaisProdutos }) {

    const router = useRouter();
    const queryObj = router.query;
    //let query = new URLSearchParams(location.search);

    const [minimo, _setMinimo] = useState(filtraFloat(queryObj["menorPreco"]));
    const [maximo, _setMaximo] = useState(filtraFloat(queryObj["maiorPreco"]));

    const setMinimo = (e) => { _setMinimo(filtraFloat(e.target.value)); }

    const setMaximo = (e) => { _setMaximo(filtraFloat(e.target.value)); }

   
    function aplicaFaixaDePreco(e) {

        e.preventDefault();

        if (minimo != "")
            query.set('menorPreco', filtraFloat(minimo));
        else
            query.delete('menorPreco');

        if (maximo != "")
            query.set("maiorPreco", filtraFloat(maximo));
        else
            query.delete("maiorPreco")

        router.push(router.pathname + "?" + queryObjToQueryString(queryObj));
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