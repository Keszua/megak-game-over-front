import { useContext, useEffect, useState } from "react";
import { ListProductFromBasketRes } from 'types';
import { LoginContext } from "../contexts/login.context";
import { fetchDELETE, fetchGET } from "../../utils/fethMetod";
import { SpinerCandle } from "../common/Spiner/SpinerCandle";
import { BasketItem } from "./BasketItem";

export const BasketList = () => {
    const context = useContext(LoginContext);
    const [productList, setProductList] = useState<ListProductFromBasketRes>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handlerBuyItems =  async () => {
        //await fetchDELETE(`/basket/all/${context.userId}`);        
        window.alert(`Dziękujemy za zakupy.\n Jesteśmy dozgonnie wdzięczni za korzystanie z naszyh usług`);
    }

    useEffect( () => {
        (async () => {
            if (context.isLoged) {
                try {
                    setLoading(true);
                        const data: ListProductFromBasketRes = await fetchGET(`/basket/${context.userId}`);
                        setProductList(data);
                } catch(e) {
                    <h3>Coś poszło nie tak</h3>;
                } finally {
                    setLoading(false);
                }
            }
        })();
    }, []);

    if (context.isLoged === false) {
        return <h3>Zaloguj się, aby zaobaczyć zawartość swojego koszyka.</h3>
    }

    return <>
        {loading && <SpinerCandle />}
        <h2>Koszyk</h2>
        {
            productList.map( product =>  (
                <BasketItem key={ product.id} product={product} />
            ))
        }
        <button className='button_style'
            onClick={handlerBuyItems}
        >
            Kup
        </button>
    </>
}