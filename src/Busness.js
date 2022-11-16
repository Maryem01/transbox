import React from 'react'
import { BsCheckLg } from "react-icons/bs";
const Busness = () => {
  return (



    <div className="Pricing">
    <div className="box_price">
    
   
   

    <div className="right_price">
      <h3> The right price for you <span>business</span></h3>
      </div>
      <div className="Pricing_business">
  
  <p>PRICING</p>
  </div>
      <div className='price_text_transparent'><span>Pricing</span>
    </div>
      </div>
    <div className='Prices'>


<div className="starter_container">
      <div className="starter_price">
      <div className="starter">
   <h3>Starter <span>Pack</span></h3>
       
      <div className="price_for_starter"><h1>100</h1>
<h4>USD</h4></div>
<div className="offres">
<p><BsCheckLg className='icon_check' /> 1 warehouse</p>
<p><BsCheckLg  className='icon_check'/>Custom business rules</p>
<p><BsCheckLg  className='icon_check'/>Real-time rate shopping</p>
<p><BsCheckLg  className='icon_check'/><span>100 freight shipments</span></p>
</div>

<div className="starter_button">
  <button>Get Started</button>
</div>

</div>
      </div>
      </div>

      <div className="regular_container">
      <div className="regular_price">
      <div className="regular">
     
      <h3>Regular <span>Pack</span></h3> <div className="price_for_regular">
 
      
      <h1>150</h1>
<h4>USD</h4>
</div>
<div className="offres">
<p><BsCheckLg className='icon_check' /> 1 warehouse</p>
<p><BsCheckLg  className='icon_check'/>Custom business rules</p>
<p><BsCheckLg  className='icon_check'/>Real-time rate shopping</p>
<p><BsCheckLg  className='icon_check'/><span>100 freight shipments</span></p>

</div><div className="regular_button">
  <button>Get Started</button>
</div>

</div>
      </div>
      </div>

      <div className="premium_container">
      <div className="premium_price">
      <div className="premium">
     
      
      
     <h3>Premium <span>Pack</span></h3>  <div className="price_for_premium">
<h1>255</h1>
<h4>USD</h4>
</div>
<div className="offres">
<p><BsCheckLg className='icon_check' /> 1 warehouse</p>
<p><BsCheckLg  className='icon_check'/>Custom business rules</p>
<p><BsCheckLg  className='icon_check'/>Real-time rate shopping</p>
<p><BsCheckLg  className='icon_check'/>100 freight shipments</p>
</div>
<div className="premium_button">
  <button>Get Started</button>
</div>

</div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Busness