import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import './ProductPage.css'
import { CreateNewProductsRes, DelOneProductsRes, ShopItemEntity, UpdateOneProductsRes } from 'types';
import { fetchDELETE, fetchGET, fetchPOST, fetchPUT } from '../../utils/fethMetod';

export const ProductPageEdit = () => {
    const location = useLocation();
    const [product, setProduct] = useState<ShopItemEntity>({
        id: '',
        productName: '?',
        shortDescription: '?',
        price: 1.00,
        quantity: 0,
        quantityInfinity: false,
        imgUrl: null,
        description: '?',
        show: false,
        isPromotion: false,
    });
    const [infoMessage, setInfoMessage] =  useState<string>('');

    const textRowCountSD = product.shortDescription ? product.shortDescription.split("\n").length : 0
    const textRowCountLD = product.description ? product.description.split("\n").length : 0

    const updateProduct = (key: string, value: any) => {
        setProduct( prod => ({
            ...prod,
            [key]: value,
        }));
    };

    const saveToNewItem = async () => {
        const data: CreateNewProductsRes = await fetchPOST(`/shop`, product);

        if ((data as ShopItemEntity).id !== undefined ) {
            setInfoMessage("Dodano nowy przedmiot");
            setTimeout( () => {
                setInfoMessage('');
            }, 5000);
        }

        if ((data as any).isSucces !== undefined) { 
            if ((data as any).isSucces === false) {
                setInfoMessage((data as any).message);
                setTimeout( () => {
                    setInfoMessage('');
                }, 5000);
            }
        }

        // switch (data as any) {
        //     case 'isSucces':
        //         console.log('obiekt:', data);
                
        //         break;
        //     default:
        //         console.log('default:', data);
        //         break;
        // }
    }

    const saveChanges = async () => {
        const data: UpdateOneProductsRes = await fetchPUT(`/shop`, product);

        if (data.isSucces) {
            setInfoMessage("Zmiana zapisana prawidłowo");
            setTimeout( () => {
                setInfoMessage('');
            }, 5000);
        } else {
            setInfoMessage("Coś poszło nie tak...")
            setTimeout( () => {
                setInfoMessage('');
            }, 10000);
        }
    }

    const deleteItem = async () => {
        const youShure =  window.confirm(`Czy jesteś pewien, \n że chcesz trwale usunąć ${product.productName}? `);

        if (youShure) {
            const data: DelOneProductsRes = await fetchDELETE(`/shop/${location.state}`);
            if (data.isSucces) {
                setInfoMessage(`${product.productName} został trwale usunięty`);
                setTimeout( () => {
                    setInfoMessage('');
                }, 5000);
            } else {
                setInfoMessage("Coś poszło nie tak...")
                setTimeout( () => {
                    setInfoMessage('');
                }, 10000);
            }
        } else {
            setInfoMessage("Coś poszło nie tak...")
            setTimeout( () => {
                setInfoMessage('');
            }, 10000);
        }
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

    if ((product as any).isSucces !== undefined) { 
        if ((product as any).isSucces === false) {
            return <h3>Wygląda na to, że produkt nie istnieje...</h3>;
        }
    }

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
                    <button className='button_style' onClick={saveToNewItem}>Zapisz jako nowy produkt</button>
                    <button className='button_style' onClick={deleteItem}>Usuń</button>
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