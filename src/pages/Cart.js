import React from "react";
import CartItem from "../Components/CartItem";
import ProductsApi from "../api/products";
import {connect} from "react-redux";
import {clearCart} from "../store/actions/actions";
import Shop from "../Shop"
import Footer from "../Footer"
class Cart extends React.Component{

    

    placeOrder = () => {
        // send the request to the server
        // clear cart
        this.props.clearCart();
        alert('We recieved your order, and we are working on it.');
    };
    

    render(){
        
        return (
            <div  className="card_shopping_item">
            <Shop />
          
            <div className="mylist_card">
            <hr border="none" />
                <div className="mycart_products">
              <p>Product	</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
                
              </div>
<hr border="none" />
              </div>
                <div className="total">
                    {this.props.cartItems.map((item, index) => 
                        <div className="total_cart" key={index}>
                            <CartItem item={item} index={index} />
                            <hr border="none"  />
                          
                        </div>
                        
                    )}
                    	
                </div>

                <br />
                <div className="cart_bottom">
                
                
               
               
                <div className="apply_coupon">
                
                
               
               
                <div className="two_buttons">
                <h4>Coupon</h4>
                    <div className="apply_update">
                   
                    <div className="input_apply">
                    <input type="text"/>
                
                    </div>
                <div className="btn_add">
               <button  onClick={this.placeOrder}>Apply Coupon</button>
                </div> 
                
                
                
             
                <div className="btn_update_card">
                <button  onClick={this.placeOrder}>Update Card</button>
                </div>
              
               
                </div>
                </div>
                <div className="get_total_cart">
                <div></div>
                <div className="get_Totals">
                <h4>Cart Totals</h4> 
                <div className="subtotal">


<p>Total <span><span></span>${this.props.total}.00</span> </p>

</div>           
<br/>
<div className="btn_order">
               <button  onClick={this.placeOrder}>PROCEED TO CHECKOUT</button>
                </div>
                </div>
                </div>
              
                </div>
               
                </div>
               <div className="footer_cart">
           <Footer />
           </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
        
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
