import React from "react";
import Footer_logo from "./transximg/logo_white.png";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandInstagram } from "react-icons/tb";
import { BsEnvelope } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_content">
        <div className="footer_top">
          <div className="footer_top_one">
            <div className="footer_top_img">
              <img src={Footer_logo} alt="" />

              <div className="footer_top_social_media">
               <i> <TiSocialTwitter className="social_icon_twi"/></i>
               <i> <AiFillYoutube className="social_icon_ytb" /></i>
               <i> <FaLinkedinIn className="social_icon_lnk"/></i>
               <i> <TbBrandInstagram className="social_icon_inst" /></i>
              </div>
            </div>
          </div>
          <div className="footer_top_two">
            <div className="footer_top_office_columbia">
              <h3>Columbia Office</h3>
              <p>Washington 165,</p>

              <p>NY CA 54003</p>
            </div>
            <div className="footer_top_office_mexico">
              <h3>New Mexico Office</h3>
              <p>10 Maggie Valleys,</p>

              <p>United States</p>
            </div>
          </div>
          <div className="footer_top_three">
            <div className="footer_top_email">
              <h3>Work Inquiries</h3>
              <p>Interested in <a>working with us?</a></p>

              <p>transx@mail.com</p>
            </div>
            <div className="footer_top_phone">
              <h3>Phone</h3>
              <p>+1 800 674 78 91</p>

              <p>+1 800 257 31 93</p>
            </div>
          </div>
          <div className="footer_top_four">
            <div className="footer_top_message">
              <h3>Stay In Touch</h3>
            </div>
            <div className="send">
              <div className="footer_top_form">
                <input type="text" name="email" placeholder="Email address" />
              </div>
              <div className="footer_top_boite">
              <button href ="" className="btn_shop"> <BsEnvelope className="icon_shop" /></button>
                
                
              </div>
            </div>
            <div className="footer_top_ms">Stay tuned for our latest news</div>
           </div>
        </div>
        <div className="line">
        <hr border="none" />
        </div>
        <div className="footer_bottom">
        <div className="footer_bottom_one">
          <div className="menu_footer_left">
            <ul>
              <li>Home</li>
              <li>Pages</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Product List</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom_two">
          <div className="menu_footer_right">
            <ul>
              <li>Terms & Conditions

</li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom_icon">
          <div className="menu_footer_icon">
            <icon></icon>

          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
