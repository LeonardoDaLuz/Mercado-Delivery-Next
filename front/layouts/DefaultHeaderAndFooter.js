import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DefaultHeaderAndFooter({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}