import React from "react";

const Footer = () => {
    return(
        <div className="footer-conatiner">
<div className="footer-left">
        <div >
            <h1 className="foot-logo">SHOP SIDE</h1>
        </div>
        <div >
           <p className="foot-des"> Follow Us On </p>
        </div>
        <div className="social-container">
            <div className="social-icon">
            <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="social-icon">
            <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div className="social-icon">
            <i class="fa-brands fa-twitter"></i>
            </div>
        </div>
</div>
<div className="footer-center">
<div className="">
    <h3 className="foot-title-1">Useful Links</h3>
</div>
<ul className="List">
    <li className="listItem">Home</li>
    <li className="listItem">Cart</li>
    <li className="listItem">Man Fashion</li>
    <li className="listItem">Tshirt</li>
    <li className="listItem">My order</li>
    <li className="listItem">Account</li>
    <li className="listItem">Jeans</li>
    <li className="listItem">Jacket</li>
    </ul>


</div>
<div className="footer-right">
    <div >
        <h3 className="foot-title-2">Contacts</h3>
    </div>
    <div >
    <div className="ContactItem"><i class="fa-solid fa-location-dot"></i><p className="contact-det">Earth</p></div>
    <div className="ContactItem"><i class="fa-solid fa-phone"></i><p className="contact-det">+91 8899445566</p></div>
    <div className="ContactItem"> <i class="fa-solid fa-envelope"></i><p className="contact-det">conatct@Shopside.com</p></div>
    
    
   
    </div>

</div>

        </div>

    )
}

export default Footer;