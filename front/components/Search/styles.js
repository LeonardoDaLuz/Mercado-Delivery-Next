import styled from 'styled-components';
import assets from '@assets';
import { Row } from '@globalStyleds';
import { colorTheme } from '../../theme';

export const Container = styled.section`
    width: 100%;
    max-width: 1140px;
    min-height: 1000px;
    padding-left: 0px 8px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: flex-start;
`;

export const ListaDeProdutos = styled.ul.attrs({
    className: "col-9"
})`
    display: flex;
    flex: 1 1 300px;
    /*width: 100%;
    max-width: 75%;*/
    flex-wrap: wrap;
    padding: 0px;   

`;

export const LoadingMessage = styled.div`

    color: ${colorTheme.primary};
    width: 100%;
    text-align: center;
    margin-top: 250px;
    font-size: 25px;

`;




