// import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import Visa from "../images/visa.png";
import MasterCard from "../images/mastercard.png";
import Paypal from "../images/paypal.png";
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Footer = () => {

    useEffect(()=>{
        AOS.init({duration: 2000});
      },[])
    

    const navigate = useNavigate();

    const handleClickAboutUs=()=>{
        navigate('/nirjara-website/about-us');
    }

    const handleClickWishlist=()=>{
        navigate('/nirjara-website/wishlist');
    }

    const handleClickFaq=()=>{
        navigate('/nirjara-website/faq');
    }

  return (
    <div>
       {/* <!-- footer section starts --> */}
        <footer className="footer_widgets footer_black" data-aos="fade-up">
            <div className="container">
                <div className="footer_top">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="widgets_container contact_us">
                                <h3>About Nirjara</h3>
                                <div className="footer_contact">
                                    <p>Address : 106, Bhole Nagar,<br/>
                                    Chandrakiran Nagar, <br/>
                                    Nagpur, Maharashtra 440024, India</p>
                                    <p>Phone : (+91) 9075487410</p>
                                    <p>Email : nirjaraskincare@gmail.com</p>
                                    <ul>
                                        <li><a href="https://www.facebook.com/profile.php?id=61565578221858" style={{fontSize:20}}><FaFacebookF/></a></li>
                                        <li><a href="https://www.instagram.com/nirjaraskincare/" style={{fontSize:20}}><FaInstagram /></a></li>
                                        <li><a href="https://api.whatsapp.com/send?phone=%2B919075487410&context=ARDNBbp3Wzr0TQVvX4y4va-ojQOxQ5BKnvm1ut7C2Em1SSDhQ5Nmvhmdc9RKv3y8_-7JGGmkLFPyPHuuUkRWqoudDZOootViwTNvJt_JIi1tY7_1qSlTEyOxKaseG3eyBQe2i6t37xGFhhwumLQ2BLTtzQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawFstOtleHRuA2FlbQIxMAABHYIPNchg0kXoAb2m7BToGnC-yj-wBrvaf_GZ_RJqqxXjKreDhGIF4NZknA_aem_CM6pRpi8SztiU7FJU7KBdg" style={{fontSize:23}}><FaWhatsapp /></a></li>


                                        {/* <li><a href="#"style={{fontSize:27}} ><FaGooglePlusG /></a></li> */}

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-4 col-6">
                            <div className="widgets_container widget_menu">
                                <h3>Information</h3>
                                <div className="footer_menu">
                                    <ul>
                                        <li><a style={{cursor:'pointer'}}onClick={handleClickAboutUs}>About Us</a></li>
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
                                        <li><a onClick={handleClickWishlist}href="#">Wishlist</a></li>
                                        {/* <li><a href="#">Portfolio</a></li> */}
                                        <li><a href="#">Checkout</a></li>
                                        <li><a onClick={handleClickFaq}href="#">Frequently Asked Questions</a></li>
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