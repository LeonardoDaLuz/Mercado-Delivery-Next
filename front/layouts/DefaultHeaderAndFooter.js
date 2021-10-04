import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Main = styled.main`
    min-height: calc(100vh - 96px - 214px);
    position: relative;
`;

export default function DefaultHeaderAndFooter({ children }) {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}