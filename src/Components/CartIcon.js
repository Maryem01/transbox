import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import "./CartIcon.css";
import { HiOutlineShoppingBag} from "react-icons/hi";
function CartIcon(Props){
    return <div id="cart-icon">
        <Link to="/cart">
        <p><HiOutlineShoppingBag className="basket-icon" /></p>
        <span>{Props.totalQuantity}</span>
        </Link>
    </div>
}

const mapStateToProps = (state) => {
    return {
        totalQuantity: state.cart.reduce((total, item) => total + parseInt(item.quantity), 0),
    };
}

export default connect(mapStateToProps)(CartIcon);