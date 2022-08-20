import React,{useState} from "react";
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Cart = () => {

    const [count , setCount] = useState(0);

    function increase(){
        setCount(count + 1)
    }

    function deacres(){
        setCount(count - 1)
    }

    return (
            <div className="cart-container">
                <Navbar />
                <Announcement />
                <div className="cart-wrapper">
                    <div >
                        <h1 className="cart-title">YOUR BAG</h1>
                    </div>
                    <div className="cart-top">
                        <button className="btn-4">CONITUNE SHOPPING</button>
                        <div className="top-texts">
                            <span className="top-text">Shopping Bag(1)</span>
                            <span className="top-text">Your Wishlist(0)</span>
                        </div>
                        <button className="btn-4" type="filled">CHECKOUT NOW</button>
                        </div>
                    </div>
                <div className="cart-bottom">
                    <div className="cart-info">
                        <div className="cart-product">
                            <div className="product-detail">
                                <img className="img-5" src = "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png"></img>
                                <div className="detail-2">
                                    <span className="product-name"><b> Product:</b> floral Frock  </span>
                                    <span className="product-id"><b> ID:</b> 6956548  </span>
                                    <span className="product-size"><b> Size:</b> M  </span>
                                    <span className="product-size"><b> Quantity</b></span>
                                    <div className="counter">
                                    <button className="btn-6" onClick = {increase}><i class="fa-solid fa-plus"></i></button>
                                    <h3 className="">{count}</h3>
                                    <button className="btn-6" onClick = {deacres}><i class="fa-solid fa-minus"></i></button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    

                </div>
                <Footer />
            </div>

    )
}

export default Cart;