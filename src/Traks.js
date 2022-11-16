import React from "react";
import Truck from "./transximg/Truck.png"
import Ship from  "./transximg/ship.png"
import Delivery from "./transximg/delivery.png"
import Train from "./transximg/train.png";
import { CgArrowLongRight } from "react-icons/cg";


const traks = () => {
  return (
    <div classname="conatiner_Traks">
    
    <div className="transport">
      <div className="description_title">
        <span>SERVICES</span>
        <p>Transportation Services</p>
      </div>
      <div className="services">
        <div className="service_one">
        <h3>
          Rockling Devario deep sea bonefish cutthroat trout streamer fish
          kaluga sailback scorpionfish sand dab, turkeyfish golden loach sand
          diver.
        </h3>
        </div>
        <div className="service_two">
        <p>
          Pacific hake false trevally queen parrotfish black prickleback
          mosshead warbonnet sweeper! Greenling sleeper. Owens pupfish large eye
          bream kokanee sprat shrimpfish grunter ratfish.
        </p>
    
        </div>
        <div className="btn_service">
        <button>All SERVICES</button></div>
      </div>
      </div>
      
<div className="cars">
<div className="box_cars">

      <div className="freight">
      <img src={Truck} alt="" />
        <span><h3>Truck Freight</h3></span>
        <p>
          Pacific hake false trevally queen parrotfish black prickleback moss
        </p>
        <CgArrowLongRight className="icon"/>
      </div>
      <div className="ship">
      <img src={Ship} alt="" />
        <span><h3>Ship Freight</h3></span>
        
        <p>Queen parrotfish black prickleback mosshead warbonnet sweeper.</p>
        <CgArrowLongRight className="icon"/>
      </div>
      <div className="delivery">
      <img src={Delivery} alt="" />
        <span><h3>Delivery Freight</h3> </span>
        <p>Owens pupfish large eye bream kokanee sprat shrimpfish grunter</p>
        <CgArrowLongRight className="icon" />
       </div>
      <div className="train">
      <img src={Train} alt="" />
        <span><h3>Train Freight</h3></span>
        <p>
          Blacksmelt sole Razorback sucker manefish. Giant sea bass sailfish
        </p>
        <CgArrowLongRight className="icon" />
      </div>
      </div>
      </div>
    </div>
  );
};

export default traks;
