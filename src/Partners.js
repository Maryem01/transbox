import React from "react";
import Blogimg from"./transximg/blogimg.jpg";
import Blogtwo from"./transximg/blogtwo.jpg";
import Logo_one from "./transximg/logo_1.png"
import Logo_two from "./transximg/logo_2.png"
import Logo_three from "./transximg/logo_3.png"
import Logo_four from "./transximg/logo_4.png"
import { Link } from "react-router-dom";
import { TfiLayoutLineSolid} from "react-icons/tfi";
const Partners = () => {
  return (
    <div classname="container_partner">
     
    <div className="partner_content">
    <div className="partner_left">
   
    <div className="Our_blog">
        
        <h3>
        Our latest articles
 <span> daily</span> update
        </h3>
        </div>
        <div className="description_blog">
        
        <h5>BLOG</h5>
      </div>
    <div className='blog_text_transparent'><span>Blog</span>
    </div>
    <div className="anim_slides_partner">
 
    <Link to="/cart" className="ht">
 <TfiLayoutLineSolid />
  </Link>

  <Link to="/cart" className="ht">
 <TfiLayoutLineSolid />
  </Link>
  <Link to="/cart" className="ht">
 <TfiLayoutLineSolid />
  </Link>
  </div>
  <div className="btn_partner">
    <button>ccc</button>
  </div>
    </div>
      
    
        <div className="box_partners">

      <div className="partner_one">
      <div className="partner_warehouse">
    <img src={Blogimg} alt=""/>
    <div className="details_partner"><span>June 24, 2021/by Artureanec</span>
<h3><a>Maintains positive momentum</a> </h3>
<p>Weever gray reef shark cardinalfish fierasfer Gila trout. Whitefish orangespine unicorn fish mola mola...
</p></div></div>
      
     
      </div>
      
      <div className="partner_two">
      
      <div className="partner_transport">
      <img src={Blogtwo} alt=""/> <div className="details_partner"><span>June 24, 2021/by Artureanec</span>
<h3><a>Big convenient warehouses</a> </h3>
<p>Whitefish orangespine unicorn fish mola mola sunfish eucla cod muskellunge ghost flathead pompano bream...
</p></div></div>
     
      
      </div>
   
    

      </div>
     
        </div>
       
        <div className="parteners">
<div className="Partners_Trust">
    
   
   

    <div className="companies_trust">
      <h3>Companies Who <span>Trust</span> Us</h3>
      </div>
      <div className="Partners_business">
  
  <p>PARTNERS</p>
  </div>
      <div className='trust_partner_text_transparent'><span>Partners</span>
    </div>
      </div>
      <div className="partners_logo">
<div className="partner_img">
<img src={Logo_one} alt=""/></div>
<div className="partner_img">
<img src={Logo_two} alt=""/></div>
<div className="partner_img">
<img src={Logo_three} alt=""/></div>
<div className="partner_img">
<img src={Logo_four} alt=""/></div>

      </div>
       
      </div>

   
   

    </div>
  );
};

export default Partners;
