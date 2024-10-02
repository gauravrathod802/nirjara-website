// import React from 'react';
import './Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import Visa from "../images/visa.png";
import MasterCard from "../images/mastercard.png";
import Paypal from "../images/paypal.png";



const Footer = () => {
  return (
    <div>
       {/* <!-- footer section starts --> */}
        <footer className="footer_widgets footer_black">
            <div className="container">
                <div className="footer_top">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="widgets_container contact_us">
                                <h3>About Nirjara</h3>
                                <div className="footer_contact">
                                    <p>Address : plot no 243 gali no 4,<br/>
                                        rishi galav nagar, galta gate, <br/>
                                        nagpur (raj) pincode 302003</p>
                                    <p>Phone : (+91) 888888885555</p>
                                    <p>Email : nirjaraskincare@gmail.com</p>
                                    <ul>
                                        <li><a href="#" style={{fontSize:20}}><FaFacebookF/></a></li>
                                        <li><a href="#" style={{fontSize:20}}><FaTwitter /></a></li>
                                        <li><a href="#" style={{fontSize:23}}><FaWhatsapp /></a></li>
                                        <li><a href="#"style={{fontSize:27}} ><FaGooglePlusG /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-4 col-6">
                            <div className="widgets_container widget_menu">
                                <h3>Information</h3>
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Collection</a></li>
                                        {/* <li><a href="#">          </a></li>
                                        <li><a href="#">          </a></li> */}
                                        {/* <li><a href="#">Portfolio</a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-5 col-6">
                            <div className="widgets_container widget_menu widget_menu-2">
                                <h3>My Account</h3>
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Wishlist</a></li>
                                        {/* <li><a href="#">Portfolio</a></li> */}
                                        <li><a href="#">Checkout</a></li>
                                        <li><a href="#">Frequently Questions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright_area">
                                <p>Copyright &copy; 2024 <a href="#">Nirjara</a> All rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
              <div className="footer_bottom_payment">
                <div className="row">
                  <div className="payment_area">
                    <a href='#'><img src={Visa}></img></a>
                    <a href='#'><img src={MasterCard}></img></a>
                    <a href=''><img src={Paypal}></img></a>
                  </div>
                </div>
              </div>
            </div>
        </footer>
        {/* <!-- footer section ends --> */}

    </div>

  )
}

export default Footer;