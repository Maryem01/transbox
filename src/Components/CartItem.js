import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../store/actions/actions";
import ReactStars from "react-rating-stars-component";
import { BsXLg } from "react-icons/bs";
import { useState } from 'react';
function ProductItem(props) {
  const { item, index } = props;
  const { product } = item;
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if(counter<=0) {
    decrementCounter = () => setCounter(1);

  }
  const handleChange = (event) => {
    setCounter({ quantity: event.target.value });
  };
  return (
    <div className="total_cart">
   
        
      <div className="products_removed">
      
       
     
      
        <div className="img-name">
        <a onClick={() => props.removeFromCart(index)} className="delete">
          <BsXLg />
        </a>
        <img src={product.image}  alt="..." />
      
       
        <span>{product.name}</span>
        </div>
       
      <p>${product.price}.00</p>
      <div className="input_price">
      <button onClick={decrementCounter}>-</button>
      
      <input
              
              type="number"
              className="inputne"
              value={counter}
              onChange={handleChange}
            />
      <button onClick={incrementCounter}>+</button>
</div>
      
      <p>${item.quantity * product.price}.00</p>
      
      </div>
    </div>
  );
}

export default connect(null, { removeFromCart })(ProductItem);
