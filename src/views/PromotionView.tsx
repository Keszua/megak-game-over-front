import { ShopProductCategory } from "types";
import { ProductList } from "../components/ProductList/ProductList";

export const PromotionView = () => (
    
    <>
        <ProductList category={ShopProductCategory.PROMOTION} />
    </>
);