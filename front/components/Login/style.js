import styled from "styled-components";

export const LoginWindow = styled.div`
    margin: 0 auto;

    position: fixed;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 100;

    label, input {
        display: block;
    }

    min-height: 500px;

    form {
        width: 350px;
        margin: 0 auto;
        padding: 50px 50px 50px 50px;
        background-color: white;

        left: 50%;
        top: 50%;
        position: absolute;
        transform: translate(-50%,-50%);

        h1 {
            text-align: center;
        }
        input {
            width: 100%;
        }

        button {
            width: 100%;
            margin-top: 15px;
        }
        span {
            display: block;
            text-align: center;
            margin-top: 15px;
        }
        
    }
`;

export const LoginContainer = styled.div`
    margin: 0 auto;
    max-width: 1000px;

    label, input {
        display: block;
    }

    min-height: 500px;

    form {
        width: 350px;
        margin: 0 auto;
        padding: 50px 20px 50px 20px;

        h1 {
            text-align: center;
        }
        input {
            width: 100%;
        }
    }
`;