import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import ReactStars from "react-rating-stars-component";
export default function ProductItem(props){
    const {product} = props;
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
      <div className="prodcitems_container">
        <div className="card_shopp">
        <div className="image_prod_item">
            <img src={product.image} className="card-img-top" alt="..." /></div>
            <div className="card-body">


            <div className="stars">
       <ReactStars
        value={product.rate}
          count={5}
          onChange={ratingChanged}
          size={14}
          activeColor="#ffd700"
        />
        </div>
                <div className="card-title">
                   <p>{product.name}</p> 
                </div>
                <div className="card-text">
<div className="card-text-price">
                   <p> ${product.price}.00</p> 
                   </div>
                <div className="card-text-icons">
            
                <a href={"/products/" + product.id} className="icon_basket"><HiOutlineShoppingBag className="icon_panier"/></a>
                </div> </div>
            </div>
        

        <div className="card_shop_map">
      
     
            </div>
           

        </div></div>
        
    );
}
