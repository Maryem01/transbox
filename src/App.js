import React from 'react';
import {Provider} from "react-redux"
import store from "./store/store";
import CartIcon from "./Components/CartIcon"
import "./App.css"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cart from './pages/Cart';
import Container from "./Container"
// Pages

import Products from "./pages/Products";

import Product from "./pages/Product";
//import Counter from "./Counter";

function App() {
  
  return (
    <div className="App_con">
      <div>
      <Router>
   
      <Route exact component={Container} path="/"   />
      
      <Route exact component={Products} path="/products/"  />
      
      <Route exact component={Product} path="/products/:id"  />
      <Route exact component={Cart} path="/cart"  />

        </Router>
      </div>
    </div>
  );
}

function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}

export default AppWithStore;
