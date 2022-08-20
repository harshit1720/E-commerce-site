import React from "react";
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import Slider from "./Slider";
import Catergories from "./Categories"
import Products from "../components/Products"
import Newsletter from "./Newsletter";
import Footer from "./Footer"




function Home(){
return(
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Catergories />
        <Products />
        <Newsletter />
        <Footer />
        
    </div>
)

}

export default Home;
