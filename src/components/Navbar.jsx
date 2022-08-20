import { Input } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";

function Navbar(){
    return(
        <div className = "nav-container">
            <div className = "nav-wrapper">
                <div className = "nav-left">
                    <div className = "left-language">
                        EN                        
                    </div>
                    <div className="search-container">
                        <Input className="search-container-input"/>
                        <Search style = {{color: "gray", fontSize: 16}}/>
                        </div>
                </div>                
                    <div className = "nav-center">
                            <div className="logo"><h1>SHOP SIDE</h1></div>
                    </div>
                    <div className = "nav-right">
                        <div className="menu-item">
                            <span className="menu-item" >REGISTER </span>
                            <span className="menu-item" >SIGN IN</span>
                            <i class="fa-solid fa-cart-shopping menu-item"></i>
                        </div>
                    </div>
                
        </div>
            
        </div>

    )
}

export default Navbar;