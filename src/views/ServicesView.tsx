import { ShopProductCategory } from "types";
import { ProductList } from "../components/ProductList/ProductList";

export const ServicesView = () => (
    
    <>
        <ProductList category={ShopProductCategory.SERVICE} />
    </>
);