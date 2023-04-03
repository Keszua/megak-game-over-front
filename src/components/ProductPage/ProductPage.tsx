import { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import './ProductPage.css'
import { ShopItemEntity, ShopProductCategory, UserPermissions } from 'types';
import { fetchGET } from '../../utils/fethMetod';
import { LoginContext } from '../contexts/login.context';

export const ProductPage = () => {
    const context = useContext(LoginContext);
    const location = useLocation();
    const [product, setProduct] = useState<ShopItemEntity>({
        id: '',
        productName: '?',
        shortDescription: '?',
        price: 0,
        quantity: 0,
        quantityInfinity: false,
        imgUrl: null,
        description: '?',
        show: false,
        isPromotion: false,
        category: ShopProductCategory.PRODUCT,
    });
    const [count, setCount] = useState<number>(1);

    const textRowCountSD = product.shortDescription ? product.shortDescription.split("\n").length : 0
    const textRowCountLD = product.description ? product.description.split("\n").length : 0

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

    if ((product as any).isSucces !== undefined) { 
        if ((product as any).isSucces === false) {
            return <h3>Wygląda na to, że produkt nie istnieje...</h3>;
        }
    }

    return <div className="Product_container">
        <h1>{product?.productName}</h1>

        <div className="Product_cart">
            <div className="Product__img" />

            <div className="Product__short-description">
                <div className={`Product__promotion ${ product.isPromotion ? 'Product__promotion_active' : 'Product__promotion_no_active'}` } >
                    Promocja
                </div>

                <textarea className='ProductEdit_textarea'
                    value={product.shortDescription}
                    rows={textRowCountSD}
                    maxLength={255}
                    disabled
                />

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
                
                { 
                    context.role ===  UserPermissions.ADMIN 
                    ?   <NavLink to="/product-edit" state={location.state} className='button_style' >
                            Edytuj
                        </NavLink>
                    :   null
                }

            </div>
        </div>

        <textarea className='ProductEdit_textarea Product_description'
                value={product.description}
                rows={textRowCountLD}
                disabled
        />

    </div>
}