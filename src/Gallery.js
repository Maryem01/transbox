import React from 'react'
import  {useState} from "react";



import Traks from "./transximg/traks.jpg"
import Ship from "./transximg/shipping.jpg"
import Port from "./transximg/port.jpeg"
import Transportation from "./transximg/transportation.jpg"
import Administration from "./transximg/administration.jpg"


const Gallery = () => {

  return (
    <div classname="container_gallery">
    <div className="gallery">
    
     
      
        <div className="Our_gallery">
        
        <h3>
Our stunning gallery
        </h3>
        </div>
        <div className="description_gallery">
        
        <p>GALLERY</p>
      </div>
        <div className='gallery_text_transparent'><span>Gallery</span>
    </div>
        </div>
<div className="box_gallery">
        <div className="card_gallery">

<img src={Traks} alt=""/>
<div className="gallery_button">

<div class="fill-button">

<button class="btn"><span>World Shipping</span>
</button>    
</div>

</div>
        </div>
        
        <div className="card_gallery">
        
        <img src={Ship} alt=""/>

<div className="gallery_button">

<div class="fill-button">

<button class="btn"><span>Sea Transportation</span>
</button>    
</div>

</div>
</div>
   <div className="card_gallery">

   <img src={Administration} alt=""/>
   <div className="gallery_button">

<div class="fill-button">

<button class="btn"><span>Delivery Administration</span>
</button>    
</div>

</div>
</div>
  
   <div className="card_gallery">
   <img src={Traks} alt=""/>

   <div className="gallery_button">

<div class="fill-button">

<button class="btn"><span>Our Truks</span>
</button>    
</div>

</div>
</div>
</div>
        </div>
  )
}

export default Gallery