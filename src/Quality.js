import React from "react";
import Quote from "./transximg/quote.png"
import Office from "./transximg/people.png";
import { Link } from "react-router-dom";
import { TfiLayoutLineSolid} from "react-icons/tfi";

const Quality = () => {
  return (

    <div className="quality_container">
   
         <div className="people_box">
<div className="people_left">
         
         
    <div className="People">
    
     
      
        <div className="quality_service">
        
        <h3>
        Excellent company
 <span> quality</span> service
        </h3>
        </div>
        <div className="description_testi">
        
        <p>TESTIMONIALS</p>
      </div>
        <div className='People_text_transparent'><span>People</span>
    </div>
        <div className="people_container">
      <div className="card_people">
     <img src={Office} alt=""/>
      </div>
   
      </div>
    
        </div>
        <div className="anim_slides_quality">
 
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
</div>
  <div className="paragraphe_container">
          <div className="text_p_one">
           
             <p>“Rockling Devario deep sea bonefish cutthroat trout streamer fish kaluga sailback scorpionfish sand dab, turkeyfish golden loach sand diver. Leopard danio píntano bonnetmouth; blue whiting, suckermouth armored catfish luderick blackchin kingfish.</p>
             </div>
             <div className="text_p_two">
             <p>Midshipman, lightfish longfin smelt pickerel houndshark whiptail. Barracuda archerfish slimehead broadband dogfish, Pacific hake false trevally queen parrotfish Black prickleback blenny, bigeye squaretail nurseryfish yellowtail barracuda. Halibut: Blacksmelt”</p>
             </div>
             <div className="text_p_three"><div className="Author"><span>“</span></div>
            <div className="Author_manager"> <h2> Well Singer
            </h2> 
             <p>
             Manager of Westwood</p> </div></div> 
          </div>
          </div>
        </div>
       
  );
};

export default Quality;
