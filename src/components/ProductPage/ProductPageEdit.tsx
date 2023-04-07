import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import './ProductPage.css'
import { CreateNewProductsRes, DelOneProductsRes, ShopItemEntity, ShopProductCategory, UpdateOneProductsRes } from 'types';
import { fetchDELETE, fetchGET, fetchPOST, fetchPUT } from '../../utils/fethMetod';
import { SpinerCandle } from '../common/Spiner/SpinerCandle';

export const ProductPageEdit = () => {
    const location = useLocation();
    const [product, setProduct] = useState<ShopItemEntity>({
        id: '',
        productName: 'Nazwa produktu',
        shortDescription: 'Krótki opis, widoczny na liście produktów',
        price: 1.00,
        quantity: 1,
        quantityInfinity: false,
        imgUrl: null,
        description: 'Opisz dokładnie nowy produkt lub usługę.',
        show: true,
        isPromotion: false,
        category: ShopProductCategory.PRODUCT,
    });
    const [infoMessage, setInfoMessage] =  useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const textRowCountSD = product.shortDescription ? product.shortDescription.split("\n").length : 0
    const textRowCountLD = product.description ? product.description.split("\n").length : 0

    const updateProduct = (key: string, value: any) => {
        setProduct( prod => ({
            ...prod,
            [key]: value,
        }));
    };

    const saveToNewItem = async () => {
        try {
            setLoading(true);
            const data: CreateNewProductsRes = await fetchPOST(`/shop`, product);

            if ((data as any).message === 'Unauthorized') {
                setInfoMessage("Nie masz uprawnień");
                setTimeout( () => {
                    setInfoMessage('');
                }, 5000);
            }

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
        } catch (err) {
            setInfoMessage(`Coś poszło nie tak... E11`);
            setTimeout( () => {
                setInfoMessage('');
            }, 5000);
        } finally {
            setLoading(false);
        }
    }

    const saveChanges = async () => {
        try {
            setLoading(true);
            const data: UpdateOneProductsRes = await fetchPUT(`/shop`, product);

            if ((data as any).message === 'Unauthorized') {
                setInfoMessage("Nie masz uprawnień");
                setTimeout( () => {
                    setInfoMessage('');
                }, 5000);
            } else if (data.isSucces) {
                setInfoMessage("Zmiana zapisana prawidłowo");
                setTimeout( () => {
                    setInfoMessage('');
                }, 5000);
            } else {
                setInfoMessage("Coś poszło nie tak... E21");
                setTimeout( () => {
                    setInfoMessage('');
                }, 5000);
            }
        } catch (err) {
            setInfoMessage("Coś poszło nie tak... E22");
            setTimeout( () => {
                setInfoMessage('');
            }, 5000);
        } finally {
            setLoading(false);
        }
    }

    const deleteItem = async () => {
        const youShure =  window.confirm(`Czy jesteś pewien, \n że chcesz trwale usunąć ${product.productName}? `);

        if (youShure) {
            setLoading(true);
            const data: DelOneProductsRes = await fetchDELETE(`/shop/${location.state}`);
            if (data.isSucces) {
                setInfoMessage(`${product.productName} został trwale usunięty`);
                setTimeout( () => {
                    setInfoMessage('');
                }, 5000);
            } else {
                if (data.message) {
                    setInfoMessage(data.message);
                } else {
                    setInfoMessage("Coś poszło nie tak... E31");
                }
                setTimeout( () => {
                    setInfoMessage('');
                }, 10000);
            }
        } else {
            setInfoMessage("Coś poszło nie tak... E32");
            setTimeout( () => {
                setInfoMessage('');
            }, 10000);
        }
        setLoading(false);
    }

    useEffect( () => {
        (async () => {
            try {
                setLoading(true);
                const data: ShopItemEntity = await fetchGET(`/shop/${location.state}`);
                setProduct(data);
            } catch(e) {
                <h3>Wygląda na to, że produkt nie istnieje...</h3>;
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if ((product as any).isSucces !== undefined) { 
        if ((product as any).isSucces === false) {
            return <h3>Wygląda na to, że produkt nie istnieje...</h3>;
        }
    }

    return <div className="Product_container">
        {loading && <SpinerCandle />}
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
                <div className="Product__promotion">
                    <label className={`input_checkbox ${ product.isPromotion ? 'Product__promotion_active' : ''}`}>
                        <input className='input_checkbox'
                            type="checkbox"
                            checked={product.isPromotion}
                            onChange={ (e: any) => updateProduct('isPromotion', !product.isPromotion)}
                        /> 
                            Promocja
                    </label>
                </div>

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
                        min="0.00"
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
                            max="9999"
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

                <div className='Flex_row'>
                    Kategoria
                    <select 
                        name="gender"
                        value={product.category}
                        onChange={ e => updateProduct('category', e.target.value)}
                    >
                        <option value={ShopProductCategory.PRODUCT}>Produkt</option>
                        <option value={ShopProductCategory.SERVICE}>Usługa</option>
                    </select>
                </div>

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