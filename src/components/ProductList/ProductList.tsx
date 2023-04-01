import { useEffect, useState } from 'react';
import './ProductList.css'
import { ShortShopItemEntity } from 'types';
import { ProductItem } from './ProductItem';
import { fetchGET } from '../../utils/fethMetod';


export const ProductList = () => {
    const [productList, setProductList] = useState<ShortShopItemEntity[]>([]);

    useEffect( () => {
        (async () => {
            try {
                const data: ShortShopItemEntity[] = await fetchGET(`/shop`);
                setProductList(data);
            } catch(e) {
                <h3>Twoja lista produktów wygląda na pustą...</h3>;
            }
        })();
    }, []);

    return <div className="ProductList__container" >
        {
            productList?.map( product => (
                <ProductItem 
                    key={ product.id} 
                    id={ product.id} 
                    productName={product.productName}
                    shortDescription={product.shortDescription}
                    price={product.price}
                    quantity={product.quantity}
                    imgUrl={null}
                />
            ))
        }
    </div>
}