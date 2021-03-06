import { colorTheme } from "@colorTheme";
import styled from "styled-components";


export const Container = styled.main`
    max-width: 1000px;
    margin: 0 auto;
`;

export const MyChartContainer = styled.div`
    padding-top: 20px;
table {
        width: 100%;
    }
`;

export const TitleEditOrder = styled.div`
    h1 {
        display: inline;
        vertical-align: middle;
    }
    span {
        color: hsl(0,0%,50%);
        font-weight: bold;
        margin-left: 15px;
        vertical-align: sub;
        font-size: 18px;
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
    h2 {
        padding-top: 25px;
        span{
            font-size: 18px;
            color: hsl(0,0%,50%);
        }
    }
    
`;

export const ErrorLabel = styled.span`
    color: red;
`;

export const PaymentContainer = styled.div`

    padding-top: 25px;
`;

export const PayOnDelivery = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
`;

export const PayWithCreditCard = styled.div`
    display: flex;

    align-items: flex-end;
    width: 320px;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 83px;
    margin-bottom: 83px;
    pointer-events: none;
    opacity: 0.5;

    &>div {
        flex: 0 0 100%;
      
  
        label {
            display: block;
        }

        input {
            width: 100%;
        }       
    }




`;


export const PayWithPix = styled.div`

   max-width: 500px;
   margin: 45px auto;
   pointer-events: none;
    
    
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

export const PurchasesContainer = styled.main`
    max-width: 1000px;
    margin: 0 auto;
    padding: 25px 0 0 0;

`;

export const PurchaseContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 3px 3px rgb(0,0,0,0.15);
    display: flex;
    margin-bottom: 25px;
`;

export const PurchaseIcon = styled.div`
    width: 90px;
    height: 90px;
    flex: 1 0 auto;
   position: relative;

    &>div {
        

        div {
            width: 100%;
            height: 100%;
            box-shadow: 0px 3px 3px rgba(0,0,0,0.2);
            background-color: white;
            border-radius: 5px;
        }
        img {
            min-width: auto!important;
            width: auto!important;
            height: auto!important;
            min-height: auto!important;
        }
    }
`;

export const PurchaseList = styled.div`
    flex: 1 1 auto;
    padding: 0 10px;

    strong {
        display: block;
    }

    span {
        background-color: hsla(120, 0%, 89%, 1);

        margin-right: 5px;
        border-radius: 10px;
        padding: 3px 5px;
        line-height: 30px;
    }
`;


export const PurchaseStatus = styled.div`
    flex: 1 1 100px;
    padding: 0 10px;
    white-space: nowrap;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    &:after {
        content: "";
        flex: 1 1 auto;
        
    
    }

    strong {
        display: block;
    }

    &>div {
        flex: 0 0 33%;
        padding: 5px 0px;


    }
`;

export const PurchaseOptions = styled.div`
flex: 1 1 100px;
padding: 0 10px;

button {
    white-space: nowrap;
    width: 100%;
}

strong {
    display: block;
}
`;


export const ModalConfirmedPaymentContainer = styled.div`
    height: 400px;
    width: 400px;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 30px;
    background-color: white;
    border-radius: 15px;

    &>div {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    strong {
        font-size: 25px;
        color: ${colorTheme.primary600};
        display: block;
    }

    button {
        
    }

    a {
        color: ${colorTheme.primary600}
    }
`;