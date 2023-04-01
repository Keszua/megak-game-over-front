import { useEffect, useState } from 'react';
import './ProductList.css'
import { ShortShopItemEntity } from 'types';
import { ProductItem } from './ProductItem';
import { fetchGET } from '../../utils/fethMetod';

interface Props {
    category: string;
}

export const ProductList = (props: Props) => {
    const { category } = props;
    const [productList, setProductList] = useState<ShortShopItemEntity[]>([]);

    useEffect( () => {
        (async () => {
            try {
                const data: ShortShopItemEntity[] = await fetchGET(`/shop/category/${category}`);
                setProductList(data);
            } catch(e) {
                <h3>Coś poszło nie tak</h3>;
            }
        })();
    }, []);

    if (productList.length === 0) {
        return <h3>Twoja lista {category} wygląda na pustą...</h3>
    }

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