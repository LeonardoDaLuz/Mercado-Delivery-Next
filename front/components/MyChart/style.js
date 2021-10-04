import styled from "styled-components";

export const Container = styled.main`
    max-width: 1000px;
    margin: 0 auto;



`;

export const MyChartContainer = styled.div`

table {
        width: 100%;
    }
`;

export const AdicionarRemoverDoCarrinho = styled.div`
    display: flex;
    justify-content: center;

    button {
        border: 0px solid;
        color: white;
        font-size: 24px;
        width: 55px;
        text-align: center;
    }

    &>button:last-child {
        background-color: rgb(2, 204, 59);
        border-radius: 0px 15px 15px 0px;
    }

    &>button:first-child {
        background-color: rgb(137, 137, 137);
        border-radius: 15px 0px 0px 15px;
    }

    &>div {
        width: 55px;
        text-align: center;
        vertical-align: middle;
        line-height: 45px;
        border: 1px solid rgb(196, 196, 196);
    }
`;

export const PedidoOptions = styled.div`
    text-align: center;
`;

export const AddressConfigContainer = styled.div`

`;

export const ErrorLabel = styled.span`
    color: red;
`;

export const PaymentContainer = styled.div`

`;

export const PayOnDelivery = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
`;

export const PayWithPix = styled.div`

   max-width: 500px;
   margin: 0 auto;

   input {
       width: 100%;
   }
`;

export const PixQRCode = styled.div`
    height: 200px;
    width: 200px;
    margin: 0 auto;

`;

export const PixQRCodeCopyInput = styled.div`
    display: flex;
    height: 42px;
`;