import React from "react";
import Backgb from "./transximg/About.png";
//import Presentationmap from "./transximg/Presentationmap.png";
//import { AnimationOnScroll } from 'react-animation-on-scroll';
//import { useSpring, animated } from 'react-spring';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'
import { useState } from 'react';

const Counter = () => {
 // const props = useSpring({ val: 20, from: { val: 0 } }); // or   const props = useSpring({ val: num, from: { val: 0 } })
  //const randomNum = Math.floor(Math.random() * 1000000);
  return (

 
    <div className="counter_container">
   <div className="counter">
      <div className="card">
      <div className="number">
      <CountUp  
  start={0}
  end={20}
  duration={2}
  separator=" "
  decimals={0}

  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
    <VisibilitySensor onChange={start}>
      <span ref={countUpRef} />
      </VisibilitySensor>
    </div>
  )}
</CountUp>
</div>

<div className="years"> years </div> 
<div className="experience">Experience in transportation</div>
</div>
      </div>
</div>
  
   

    
   
   
  
   



  );
};

export default Counter;
