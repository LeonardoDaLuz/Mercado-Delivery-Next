import { ButtonFlat } from "@globalStyleds";
import styled from "styled-components";

export const RegisterContainer = styled.div`
    margin: 0 auto;
    max-width: 98%;
    width: 900px;

    label, input {
        display: block;
    }

    min-height: 500px;

    form {


        padding: 50px 20px 50px 20px;

        h1 {
            text-align: center;
        }

    }
`;

export const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    width: 100%;
    justify-content: flex-start;


`;

export const InputBlock = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    padding: 5px;
    min-width: 350px;

    label {
        display: inline-block;
    }
   

    input, select {
            width: 100%;
        }


`;
export const InputRadius = styled.div`
    flex: 1 0 300px;

    label {
        display: inline-block;
       
    }

    input {
        display: inline-block;
        margin-left: 15px;
    }
`;

export const RegisterButton = styled(ButtonFlat)`
  
    display: block;   
    margin: 25px auto;
`;

export const EnderecoFieldSet = styled.fieldset`
    margin-top: 25px;
    border-radius: 15px;
    padding-bottom: 25px;
`;


export const ErrorLabel = styled.div`
    display: inline-block;
    text-align: center;
    color: red;

    margin-left: 5px;


`;