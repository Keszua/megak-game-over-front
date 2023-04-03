import { ShopProductCategory } from "types";
import { ProductList } from "../components/ProductList/ProductList";

export const ProductsView = () => (
    
    <>
        <ProductList category={ShopProductCategory.PRODUCT} />
    </>
);