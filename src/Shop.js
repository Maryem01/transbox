import { BsDashLg } from "react-icons/bs";
import Navbar from "./Navbar";
import CartIcon from "./Components/CartIcon"
const Shop = () => {
  return (
   
      
        
      <div className="shop_content">
     
      <Navbar className="top_cart_nav"/>
      <CartIcon/>
      <div className="content_shop">
     
        <div className="texts_shop">
          <div className="text_shop">
            <h1>Shop</h1>
          </div>
          <div className="text_trans_shop">
            <span> TransX</span>
          </div>

         
         
        </div>
       

    
      </div>
      
    </div>
   
  );
};

export default Shop;
