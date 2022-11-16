import React from "react";
import Backgb from "./transximg/About.png";
//import Presentationmap from "./transximg/Presentationmap.png";
//import { AnimationOnScroll } from 'react-animation-on-scroll';
//import { useSpring, animated } from 'react-spring';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'
import { useState } from 'react';
import Counter from "./Counter"
const Company = () => {
 // const props = useSpring({ val: 20, from: { val: 0 } }); // or   const props = useSpring({ val: num, from: { val: 0 } })
  //const randomNum = Math.floor(Math.random() * 1000000);
  return (

    <div className="company_container">
   
    <div className="company">
  


 
     

  
    {/*
     
    */} 

    
   
   
    <div className="counter_container">
      <Counter />
      </div>
      
      <div className="presentation_right">
       
         
          <div className="paragraphe_container">
           
             <h3>ABOUT TRANSX</h3>
            
<h1>TransX is the biggest transportation company</h1>
<div className="transx_paragraph"><div className="paragraphe_one">
<p>Rockling Devario deep sea bonefish cutthroat trout streamer fish kaluga sailback scorpionfish sand dab, turkeyfish golden loach sand diver. Leopard danio píntano bonnetmouth; blue whiting, suckermouth armored catfish luderick kingfish.</p></div>
<div className="paragraphe_two">
<p>Midshipman, lightfish longfin smelt pickerel houndshark whiptail. Barracuda archerfish slimehead broadband dogfish, Pacific hake false trevally queen.</p></div>
</div>
<div className="btn_company">
        <button>MORE ABOUT</button></div>
   </div>
    

</div>
      </div>
     
</div>
    



  );
};

export default Company;
