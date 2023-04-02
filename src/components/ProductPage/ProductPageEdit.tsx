import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import './ProductPage.css'
import { ShopItemEntity } from 'types';
import { fetchGET } from '../../utils/fethMetod';

export const ProductPageEdit = () => {
    const location = useLocation();
    const [product, setProduct] = useState<ShopItemEntity>({
        id: '',
        productName: '?',
        shortDescription: '?',
        price: 0.01,
        quantity: null,
        quantityInfinity: false,
        imgUrl: null,
        description: '?',
        show: false,
        isPromotion: false,
    });
    const [count, setCount] = useState<number>(1);
    const [infoMessage, setInfoMessage] =  useState<string>('info');

    const textRowCountSD = product.shortDescription ? product.shortDescription.split("\n").length : 0
    const textRowCountLD = product.description ? product.description.split("\n").length : 0

    const updateProduct = (key: string, value: any) => {
        setProduct( prod => ({
            ...prod,
            [key]: value,
        }));
    };

    const saveNewItem = () => {
        console.log('Nowy wpis');
    }

    const saveChanges = () => {
        console.log('Zapisz zminy');
    }

    useEffect( () => {
        (async () => {
            try {
                const data: ShopItemEntity = await fetchGET(`/shop/${location.state}`);
                setProduct(data);
            } catch(e) {
                <h3>Wygląda na to, że produkt nie istnieje...</h3>;
            }
        })();
    }, []);

    return <div className="Product_container">

        <div className="Product_info_message">{infoMessage}</div> 

        <input className='ProductEdit_input product_name'
            type="text"
            value={product.productName}
            maxLength={60}
            onChange={ (e: any) => updateProduct('productName', e.target.value)} 
        />

        <div className="Product_cart">
            <div className="Product__img" />

            <div className="Product__short-description">
                <textarea className='ProductEdit_textarea'
                    value={product.shortDescription}
                    rows={textRowCountSD}
                    maxLength={255}
                    onChange={ (e: any) => updateProduct('shortDescription', e.target.value)} 
                />

                <div className="Product__price">
                    <div style={{fontSize:"0.8em"}}>Cena: </div>
                    <input className='ProductEdit_input product_price'
                        type="number"
                        value={(product.price).toFixed(2)}
                        min="0.01"
                        max="99999999"
                        onChange={ (e: any) => updateProduct('price', Number(e.target.value))} 
                    />
                    <div style={{fontSize:"0.5em"}}>zł</div>
                </div>


                <div className='Flex_row'>
                    <label className='Product_label'>
                        Ilość
                        <input className='input_style'
                            type="number"
                            value={Number(product?.quantity)}
                            min="1"
                            max={product?.quantity != null ? `${product?.quantity}` : "9999" }
                            onChange={ (e: any) => updateProduct('quantity', e.target.value)}
                            disabled = {product?.quantityInfinity}
                            style={ product?.quantityInfinity ? {color: '#333'} : {}}
                        />
                    </label>
                    <label className='input_checkbox'>
                        <input className='input_checkbox'
                            type="checkbox"
                            checked={product.quantityInfinity}
                            onChange={ (e: any) => updateProduct('quantityInfinity', !product.quantityInfinity)}
                        /> 
                        Bez limitu
                    </label>
                </div>

                Dodać kategorię

                <div>
                    <button className='button_style' onClick={saveChanges}>Zapisz zmiany</button>
                    <button className='button_style' onClick={saveNewItem}>Zapisz jako nowy produkt</button>
                    <NavLink to="/product-item" state={location.state} className='button_style' >
                        Anuluj
                    </NavLink>
                </div>
            </div>
        </div>

        <textarea className='ProductEdit_textarea Product_description'
                value={product.description}
                rows={textRowCountLD}
                maxLength={65535}
                onChange={ (e: any) => updateProduct('description', e.target.value)} 
        />

    </div>
}