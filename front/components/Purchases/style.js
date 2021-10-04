import { colorTheme } from "@colorTheme";
import styled from "styled-components";

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
        flex: 1 1 200px;
    
    }

    strong {
        display: block;
    }

    &>div {
        flex: 1 0 200px;
        padding: 5px 0px;
    }
`;

export const PurchaseOptions =  styled.div`
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