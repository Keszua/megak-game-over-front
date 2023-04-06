//import { useState } from 'react';
import './ProductList.css'
import { ShortShopItemEntity } from 'types';
import { NavLink } from 'react-router-dom';

export const ProductItem = (props: ShortShopItemEntity) => {
    const { id, productName, shortDescription, price, quantity, quantityInfinity, isPromotion} = props;

    return <NavLink to="/product-item" state={id} className="ProductItem__container">
        <div className="ProductItem__img" />
        <div className="ProductItem__text">
            <div className="productName" >{productName}</div> 
            <div className="ProductItem_description">
                {shortDescription}
            </div>
        </div>
        <div className="ProductItem__info">
            {
                isPromotion ? <div className="ProductItem__promocja">Promocja!</div> : null
            }
            <div className="ProductItem__info-price">
                <div>Cena</div>
                <div>{Number(price)}</div>
            </div>
            {
                quantityInfinity
                ? <div></div>
                : <div className="ProductItem__info-availability">
                    <div>Dostępne</div>
                    <div>{Number(quantity)}</div>
                </div>
            }
        </div>
    </NavLink>
}