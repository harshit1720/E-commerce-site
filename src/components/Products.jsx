import React from "react";
import {popularProducts} from "../data";
import Product from "./Product";

const Products = () => {
    return (
        <div className = "products-container">
        {popularProducts.map((item) => (
            <Product item ={item} />
        ))}
                    
        </div>
    );
};

export default Products;