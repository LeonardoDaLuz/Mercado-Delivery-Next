import { GlobalStyle } from "/globalStyleds";
import { storeWrapper } from "../store";
import "normalize.css";


function MyApp({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
export default storeWrapper.withRedux(MyApp)
