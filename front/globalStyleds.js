import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { colorTheme } from './theme';
import assets from '@assets';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${colorTheme.siteBackground(500)};
        min-height: 100%;

        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-align: left;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body>div>main {
        background-color: rgb(244, 244, 244);
        padding-bottom: 30px;
    }

    .noscroll {
        position: fixed!important;
    }

    .navbar-logo {
        flex: 0;
        flex-basis: 64px;
        height: 48px;
        background-image: url('/src/assets/png/LogoAlpha48px.png');
        background-repeat: no-repeat;
        background-position: center;  

    }


    ul {
        list-style-type: none;
        margin: 0px;
    }

    @media screen and (min-width: 992px) {
        .navbar-logo {
            flex-basis: 289px;
            background-image: url('/src/assets/png/LogoExtended48px.png');
        }
    }

    img {
        vertical-align: middle;
        border-style: none;
    }

    input, button, select, optgroup, textarea {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        outline: none;
    }

    h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
    }

    .h1, h1 {
        font-size: 2.5rem;
    }

    .h2, h2 {
        font-size: 2rem;
    }

    .h3, h3 {
        font-size: calc(1.3rem + .6vw);
    }
    .h4, h4 {
        font-size: 1.5rem;
    }

    .h5, h5 {
        font-size: 1.25rem;
    }

    .h6, h6 {
        font-size: 1rem;
    }


    a {
        color: rgb(64, 64, 64);
        text-decoration: none;
        cursor: pointer;


    }
    a:hover {
        text-decoration: underline;
    }

    button {
        cursor: pointer!important;
    }


    /* o q esta abaixo remover */
    #side-bar {
    background-color: rgba(0, 0, 0, 0);
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100%;
    pointer-events: none;
    display: flex;
    flex-wrap: nowrap;
    z-index: 300;
}

#side-bar.show {
    pointer-events: all;
    background-color: rgba(0, 0, 0, 0.5);
    animation: side-bar-fade-in 0.2s ease-out;
}

#side-bar.hide {
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0);
    animation: side-bar-fade-out 0.2s ease-out;
}


#side-bar>ul {
    background-color: white;    
    display: block;
    flex-grow: 5;   
    transform: translateX(-100%);
    overflow-y: scroll;
    margin: 0;
}

#side-bar.show>ul {
    transform: translateX(0%);
    animation: side-bar-ul-show 0.2s ease-out;
    
}

#side-bar.hide>ul {
    transform: translateX(-100%);
    animation: side-bar-ul-hide 0.2s ease-out;
}
 @keyframes side-bar-fade-in {
     from {
         background-color: rgba(0, 0, 0, 0);;
     }
     to {
         background-color: rgba(0, 0, 0, 0.5);;
     }
 }

 @keyframes side-bar-fade-out {
    from {
        background-color: rgba(0, 0, 0, 0.5);;
    }
    to {
        background-color: rgba(0, 0, 0, 0);;
    }
}

@keyframes side-bar-ul-show {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0%);
    }
  }
  
  @keyframes side-bar-ul-hide {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-100%);
    }
  }
`;

export const Body = styled.div`
    flex: 1 0 auto;

`;
//Div especial utilitária
export const Div = styled.div`
   ${({ ChildrenFlexGrow }) => ChildrenFlexGrow && `
        &>* {
            flex: 1 1 0%;
        }
   `}
`;

export const Container = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: 0px auto;
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CenterContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width:1000px;
`;

export const Row = styled(Div)`
    display: flex;    
    flex-wrap: wrap;
    justify-content: ${props => (props.justify === undefined ? 'flex-start' : props.justify)};
`;

export const Col = styled.div`
    flex: 1 0 0%;
    overflow: hidden;
   
`;

export const Col3 = styled.div`
    flex: 0 0 25%;
    max-width: 25%;
`;

export const Inline_block = styled.div`
    display: inline-block;
`;

export const Button = styled.button.attrs(({ type }) => {
    return (type === undefined ? { type: 'button' } : { type: '' }) //isto previne q os buttons venham como type=submit como padrão.
})``;

export const ButtonFlat = styled(Button)`

    color: ${({ Color = 'white' }) => Color};
    background-color: ${({ bgColor = '#32b112' }) => bgColor};
    border: 1px solid ${({ bgColor = '#32b112' }) => bgColor};
    border-radius: 0.25rem;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 0.375rem 0.75rem;
    margin: 3px 3px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:active {
        filter: brightness(85%);

    }

    &:disabled {
        opacity: 0.3!important;
    }
`;

export const ButtonOutline = styled.button.attrs(({ type }) => {
    return (type === undefined ? { type: 'button' } : { type: '' })
})`
    background-color: transparent;
    color: rgb(63, 223, 99);
    cursor: pointer;
    border-radius: 0.25rem;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    border: 1px solid rgb(63, 223, 99);
    padding: 0.375rem 0.75rem;
    margin: 3px 3px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:hover {
        color: #212529;
        text-decoration: none;
        color: rgb(255, 255, 255);
        text-decoration-color: initial;
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
    }

    &:active {
        color: rgb(255, 255, 255);
        background-color: rgb(56, 194, 87);
        border-color: rgb(63, 223, 99);
    }
`;

export const HorizontalFlexList = styled.ul`
    display: flex;
    align-items: center;
    margin: 0px;
    list-style-type: none;
    padding: 0px 10px;

    li {
        flex-grow: 1;
        margin: 3px 10px; 
        list-style-type: none;
    }
`;

export const HorizontalFlexList_Lg = styled(HorizontalFlexList)`

    @media screen and (max-width: 992px) {       
        li {
            display: none;
        }
    }
`;

export const Input = styled.input.attrs({
    type: "text"
})`

`;

export const CloseButton = styled.button`
    background-color: #ff1111;
    position: absolute;
    width: ${({ size = "30px" }) => size};
    height: ${({ size = "30px" }) => size};
    right: 5px;
    top: 5px;
    border: none;
    border-radius: 50%;
    padding: 0px;
    margin: 0px;
    z-index: 1;

    &::after {

      content:"";
      background-color: white;
      display: block;
      width: 63%;
      height: 16%;
      transform: rotate(45deg);
      position: absolute;
      top: 40%;
      left: 19.5%;
    }
    &::before {

      content:"";
      background-color: white;
      display: block;
      position: absolute;
      width: 63%;
      height: 16%;
      top: 40%;
      left: 19.5%;
      transform: rotate(-45deg);
    }
`;


export const Center = styled.div`
    margin: 0 auto;
    width: fit-content;
`;

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;


export const LoaderWheel = styled.div`
    display: inline-block;
    vertical-align: middle;
    width: 45px;
    height: 45px;
    background: transparent url(${assets.update_icon}) no-repeat center center;
    background-size: contain;
    animation: ${spin} 0.5s linear infinite;
`;

export const FadeBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: red;
    position: absolute;
    background-color: rgb(0,0,0,0.5);

`;