import DefaultHeaderAndFooter from "@layouts/DefaultHeaderAndFooter"
import { ImageLoader } from "next/image"
import { ReactElement, useEffect } from "react"
import { Date_, PurchaseContainer, PurchaseIcon, PurchaseList, PurchaseOptions, PurchasesContainer, PurchaseStatus, Quantity, Total } from '@components/Purchases/style';
import { useDispatch, useSelector } from "react-redux";
import { loadPurchasesThunk } from "@slices/purchasesSlice";
import type { Purchase as PurchaseType } from "@slices/purchasesSlice";
import { AppState } from "@store";
import Image from 'next/image'
import { Button, ButtonFlat } from "@globalStyleds";
import Link from 'next/link';

function Purchases() {

    const dispatch = useDispatch();
    const user = useSelector((rootState: AppState) => rootState.user);
    const purchases = useSelector((rootState: AppState) => rootState.purchases);
    useEffect(() => {
        dispatch(loadPurchasesThunk())
    }, [user.account_id])

    return (
        <PurchasesContainer>
            <h1>Meus Pedidos</h1>
            {
                Object.keys(purchases).map(key => {

                    return <Purchase purchase={purchases[key]} />
                })
            }
        </PurchasesContainer>

    )
}

function Purchase({ purchase }: { purchase: PurchaseType }) {

    const productKeys = Object.keys(purchase.produtos);
    const imageCount = productKeys.length;

    const images: string[] = [];

    for (let key of productKeys) {
        if (images.length < 5)
            images.push("/" + purchase.produtos[key].data?.imgs[0]!);
    }

    let productIcons = null;


    switch (images.length) {
        case 1:
            productIcons =
                <div style={{ height: '90px', width: '90px' }}>
                    <Image loader={myImageLoader} src={images[0]} width={0} height={0} />
                </div>
            break
        case 2:
            productIcons =
                <>
                    <div style={{ width: '64px', height: '64px', position: "absolute", left: '0px', top: '0px' }}>
                        <Image loader={myImageLoader} src={images[0]} width={0} height={0} />
                    </div>
                    <div style={{ width: '64px', height: '64px', position: "absolute", right: '0px', bottom: '0px' }}>
                        <Image loader={myImageLoader} src={images[1]} width={0} height={0} />
                    </div>
                </>
            break
        case 3:
            productIcons =
                <>
                    <div style={{ width: '45px', height: '45px', position: "absolute", left: '0px', top: '0px' }}>
                        <Image loader={myImageLoader} src={images[0]} width={0} height={0} />
                    </div>
                    <div style={{ width: '45px', height: '45px', position: "absolute", right: '0px', top: '18px' }}>
                        <Image loader={myImageLoader} src={images[1]} width={0} height={0} />
                    </div>
                    <div style={{ width: '45px', height: '45px', position: "absolute", left: '0px', bottom: '0px' }}>
                        <Image loader={myImageLoader} src={images[2]} width={0} height={0} />
                    </div>
                </>
            break;
        case 4:
            productIcons =
                <>
                    <div style={{ width: '45px', height: '45px', position: "absolute", left: '0px', top: '0px' }}>
                        <Image loader={myImageLoader} src={images[0]} width={0} height={0} />
                    </div>
                    <div style={{ width: '45px', height: '45px', position: "absolute", right: '0px', top: '0px' }}>
                        <Image loader={myImageLoader} src={images[1]} width={0} height={0} />
                    </div>
                    <div style={{ width: '45px', height: '45px', position: "absolute", right: '0px', bottom: '0px' }}>
                        <Image loader={myImageLoader} src={images[2]} width={0} height={0} />
                    </div>
                    <div style={{ width: '45px', height: '45px', position: "absolute", left: '0px', bottom: '0px' }}>
                        <Image loader={myImageLoader} src={images[3]} width={0} height={0} />
                    </div>
                </>
            break;
        case 5:
            productIcons =
                <>
                    <div style={{ width: '40px', height: '40px', position: "absolute", left: '0px', top: '0px' }}>
                        <Image loader={myImageLoader} src={images[0]} width={0} height={0} />
                    </div>
                    <div style={{ width: '40px', height: '40px', position: "absolute", right: '0px', top: '0px' }}>
                        <Image loader={myImageLoader} src={images[1]} width={0} height={0} />
                    </div>
                    <div style={{ width: '40px', height: '40px', position: "absolute", right: '0px', bottom: '0px' }}>
                        <Image loader={myImageLoader} src={images[2]} width={0} height={0} />
                    </div>
                    <div style={{ width: '40px', height: '40px', position: "absolute", left: '0px', bottom: '0px' }}>
                        <Image loader={myImageLoader} src={images[3]} width={0} height={0} />
                    </div>
                    <div style={{ width: '40px', height: '40px', position: "absolute", left: '25px', top: '25px' }}>
                        <Image loader={myImageLoader} src={images[4]} width={0} height={0} />
                    </div>
                </>
            break;
    }
    return (
        <PurchaseContainer>
            <PurchaseIcon>
                {productIcons}
            </PurchaseIcon>
            <div>
                <PurchaseList>
                    <strong>Produtos (25)</strong>
                    {productKeys.filter((key, index) => (index < 10)).map(key => <span>{(purchase.produtos[key].data!.title.substr(0, 22) + "... ")}</span>)}
                </PurchaseList>
                <PurchaseStatus>
                    <div>
                        <strong>Pagamento:</strong>
                        {
                            (purchase.payment === 'payment_on_delivery' && 'Pagamento na entrega') ||
                            (purchase.payment === 'approved' && 'Aprovado') ||
                            ('Aguardando pagamento')
                        }
                    </div>

                    {purchase.delivery !== 'waiting_payment' &&
                        <div>
                            <strong>Entrega:</strong>
                            {
                                (purchase.delivery === 'out_for_delivery' && 'Saiu para entrega.') ||
                                (purchase.delivery === 'preparing_shipment' && 'Preparando para entrega...') ||
                                ('Aguardando pagamento')
                            }
                        </ div>
                    }
                    {purchase.deliveryForecast !== undefined &&
                        <div>
                            <strong>Previsão de entrega:</strong>
                            Para Hoje
                        </ div>
                    }
                    <div>
                        <strong>Data do pedido:</strong>
                        {purchase.createdAt}
                    </div>
                    <div>
                        <strong>Custo total:</strong>
                        R$ {calculateTotalCost(purchase).toString().replace('.', ',')}
                    </div>
                </PurchaseStatus>
            </div>

            <PurchaseOptions>
                <strong>Opções</strong>
                <Link href={'/purchases/' + purchase._id+"/pay"}>
                    <a><ButtonFlat>Efetuar pagamento</ButtonFlat></a>
                </Link>
                <ButtonFlat>Cancelar pedido</ButtonFlat>
                <Link href={'/purchases/' + purchase._id}>
                    <a><ButtonFlat>Editar pedido</ButtonFlat> </a>
                </Link>
                <strong>Contato</strong>
                sac@mercadodelivery.com.br
                41 3425-5498
            </PurchaseOptions>
        </PurchaseContainer>
    )
}

function calculateTotalCost(purchase: PurchaseType) {
    let total = 0;
    for (let key in purchase.produtos) {
        let productRegister = purchase.produtos[key];
        total += productRegister.quantidade * productRegister.data!.price;
    }
    return total;
}

const myImageLoader: ImageLoader = ({ src, width, quality }) => {
    return `http://localhost:3001/${src}?w=${width}&q=${quality || 75}`
}


Purchases.getLayout = (page: ReactElement) => {
    return (
        <DefaultHeaderAndFooter>
            {page}
        </DefaultHeaderAndFooter>
    )
}

export default Purchases;

