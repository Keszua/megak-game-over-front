import './BasketItem.css'
import { OneItemInBasketRes } from 'types';
import { apiUrl } from '../../config/api';

interface Props {
    product: OneItemInBasketRes;
}

export const BasketItem = (props: Props) => {
    const { id, productName, shortDescription, price, count, isPromotion, idProduct } = props.product;

    return <div className="BasketItem__container">
        <div className="BasketItem__img" >
            <img src={`${apiUrl}/shop/photo/${idProduct}`} alt="" />
        </div>
       
        <div className="BasketItem__text">
            <div className="productName" >{productName}</div> 
            <div className="BasketItem_description">
                {shortDescription}
            </div>
        </div>
        
        <div className="BasketItem__info">
            <div className="BasketItem__info-price">
                <div>Cena</div>
                <div>{Number(price)}</div>
            </div>
            {
                <div className="BasketItem__info-availability">
                    <div>W koszyku:</div>
                    <div>{Number(count)}</div>
                </div>
            }
        </div>
    </div>
}