import React from "react";

const Product = ({ item } ) => {
    return(
        <div className="product-container">
            <div className="circle">

            </div>
            <div>
                <img  className="img-3" src={item.img} alt="men"></img>
            </div>
            <div className="product-info">
                <div className="product-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                <div className="product-icon"><i class="fa-solid fa-cart-shopping"></i></div>
                <div className="product-icon"><i class="fa-solid fa-heart"></i></div>

            </div>
        </div>
    );
};

export default Product;