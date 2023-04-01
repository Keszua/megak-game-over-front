import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import './ProductPage.css'
import { ShopItemEntity } from 'types';
import { fetchGET } from '../../utils/fethMetod';

export const ProductPage = () => {

    // const [form, setForm] = useState<ShortShopItemEntity>({
    // const [form, setForm] = useState<any>({
    //     id: '',
    //     productName: '',
    //     shortDescription: '',
    //     price: 0,
    //     quantity: 1,
    //     imgUrl: null,
    // });

    const location = useLocation();
    const [product, setProduct] = useState<ShopItemEntity>({
        id: '',
        productName: '?',
        shortDescription: '?',
        price: 0,
        quantity: null,
        imgUrl: null,
        description: '?',
        show: false,
    });
    const [count, setCount] = useState<number>(1);

    useEffect( () => {
        (async () => {
            try {
                const data: ShopItemEntity = await fetchGET(`/shop/${location.state}`);
                setProduct(data);
            } catch(e) {
                <h3>Wygląda nato, że produkt nie istnieje...</h3>;
            }
        })();
    }, []);

    return <div className="Product_container">
        <h1>{product?.productName}</h1>

        <div className="Product_cart">
            <div className="Product__img" />

            <div className="Product__short-description">
                {product?.shortDescription}
                <div className="Product__price">
                    <div style={{fontSize:"0.8em"}}>Cena: </div>
                    <strong style={{margin:"5px"}}>{Number(product?.price)}</strong>
                    <div style={{fontSize:"0.5em"}}>zł</div>
                </div>
                (Suma: {(Number(product?.price) * count).toFixed(2)} zł )


                <label className='Product_label'>
                    Ilość
                    <input className='input_style'
                        type="number"
                        value={count}
                        min="1"
                        max={product?.quantity != null ? `${product?.quantity}` : "9999" }
                        onChange={ (e: any) => setCount(e.target.value)}
                    />
                </label>

                <button className='button_style'>Do koszyka</button>

            </div>
        </div>

        <div className="Product_description">
            {product?.description}
        </div>
    </div>
}