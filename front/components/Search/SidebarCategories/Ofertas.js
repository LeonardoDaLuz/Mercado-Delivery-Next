import { useState } from 'react';
import { Input } from '../../../globalStyleds';
import { OrdemSelectForm } from './styles';
import { filtraFloat } from '../../../utils/InputFilters';
import { loadMoreProducts } from '../../../store/actions/products';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryObjToQueryString from '../../../utils/queryObjToQueryString';
import { useRouter } from 'next/router';

function Ofertas_() {

    const router = useRouter();
    const query = router.query;
    const sort = query['offer'] || '';

    function aplicaOrdem(e) {

        query["offer"] = e.target.value;
        router.push(router.pathname + "?" + queryObjToQueryString(query));
      }
    return (<>
        <h4>Ofertas</h4>
        <OrdemSelectForm >
            <select name="ofertas" id="ofertas" value={sort} onChange={aplicaOrdem}>
                <option value=""> </option>
                <option value="day">Ofertas do dia</option>
                <option value="week">Ofertas da semana</option>
                <option value="month">Ofertas do mês</option>
            </select>
        </OrdemSelectForm>
    </>);
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ carregaMaisProdutos: loadMoreProducts }, dispatch)

export const Ofertas = Ofertas_;