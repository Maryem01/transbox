import React from "react";
import { TbBuildingBank} from "react-icons/tb";
 import { TbReport}   from "react-icons/tb";
import { BiCommentDetail } from "react-icons/bi";
import { Fa500Px } from "react-icons/fa";

const Features = () => {
  return (
    <div classname="container_house">
     
    <div className="feautres">
   
    <div className="powerfull">
        
        <h3>
        Powerful Features of 
 <span> TransX</span> Warehouse
        </h3>
        </div>
        <div className="description_warehouse">
        
        <h5>FEATURES</h5>
      </div>
    <div className='feature_text_transparent'><span>Features</span>
    </div>
     
      
       
       
       
        </div>
<div className="boxes">
<div className="feautres_boxes">

      <div className="warehouse">
      
        <h1>warehouse</h1>
        <p>
        Kokanee sprat shrimpfish. Pacific hake false trevally queen parrotfish.
        </p>
        <div className="icon">
        <TbBuildingBank/>
        </div>
      
     
      </div>
      
      <div className="Support">
      
        <h1>Support 24/7</h1>
        
        <p>Greenling sleeper; Owens pupfish large-eye bream kokanee sprat shrimpfish.</p>
       
        <div className="icon"><BiCommentDetail/></div>
       
     
      </div>
   
    
      <div className="Online_Tracking">
      
        <h1> Online Tracking</h1>
        <p>Mosshead warbonnet sweeper! Greenling sleeper; Owens pupfish.</p>
      
<div className="icon"><Fa500Px/></div>


      
       </div>
     
       
      <div className="Cargo_Insurance">
      
        <h1>Cargo Insurance</h1>
        <p>
        Pacific hake false trevally queen parrotfish Black prickleback.
        </p>
        <div className="icon"><TbReport/></div>
        
      </div>
      
      </div>
      </div>
      <div className="btn_house">
        <button>All SERVICES</button>
        </div> 
   

    </div>
  );
};

export default Features;
