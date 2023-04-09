import { useContext, useEffect, useState } from 'react';
import './ProductList.css'
import { ShortShopItemEntity, UserPermissions } from 'types';
import { ProductItem } from './ProductItem';
import { fetchGET } from '../../utils/fethMetod';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../contexts/login.context';
import { SpinerCandle } from '../common/Spiner/SpinerCandle';

interface Props {
    category?: string | null;
    isPromotion?: boolean;
}

export const ProductList = (props: Props) => {
    const context = useContext(LoginContext);
    const { category, isPromotion } = props;
    const [productList, setProductList] = useState<ShortShopItemEntity[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect( () => {
        (async () => {
            try {
                setLoading(true);
                if (isPromotion) {
                    const data: ShortShopItemEntity[] = await fetchGET(`/shop/promotion`);
                    setProductList(data);
                } else if(category) {
                    const data: ShortShopItemEntity[] = await fetchGET(`/shop/category/${category}`);
                    setProductList(data);
                }
            } catch(e) {
                <h3>Coś poszło nie tak</h3>;
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (productList.length === 0) {
        return <> 
            {   loading 
                ?   <SpinerCandle />
                :   <h3>Twoja lista {category} wygląda na pustą...</h3>
            }
            {
                context.role ===  UserPermissions.ADMIN 
                ?   <NavLink to="/product-edit" state={null} className='button_style' >
                        Dodać nowy?
                    </NavLink>
                : null    
            }
        </>
    }

    return <div className="ProductList__container" >
        {loading && <SpinerCandle />}
        {
            productList?.map( product => (
                <ProductItem 
                    key={ product.id} 
                    id={ product.id} 
                    productName={product.productName}
                    shortDescription={product.shortDescription}
                    price={product.price}
                    quantity={product.quantity}
                    quantityInfinity={product.quantityInfinity}
                    isPromotion={product.isPromotion}
                />
            ))
        }
    </div>
}