import React from "react";
import Img from "./transximg/Img.png";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
   <div className="nav"> 
        <div className="menu_left">
          <div className="left">
            <i class="fa-solid fa-ellipsis-vertical"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className="logo">
            <img src={Img} alt="" />
          </div>
        </div>
       
        
          
       
          
       
        <div className="center">
          <div className="menu">
            <ul>
              <li>
                <div className="homebar">
                  <div className="Home">
                    <div className="one_line">
                      
                        <Link to="/" className="toright">Home
                      
                      <div className="menu_home">
                        <ul>
                          <li>
                            <Link to="">Home Cargo</Link>
                          </li>
                          <li>
                            <Link to="">Home Logistic</Link>
                          </li>
                          <li>
                            <Link to="">Home Transport</Link>
                          </li>
                          <li>
                            <Link to ="">Home Moving</Link>
                          </li>
                          <li>
                            <Link to ="">Home shipping</Link>
                          </li>
                          <li>
                            <Link to ="">Home Warehouse</Link>
                          </li>
                          <li>
                            <Link to ="">Intro</Link>
                          </li>
                        </ul>
                      </div>{" "}
                      </Link>
                    </div>{" "}
                    <div className="menu_icon">
                      {" "}
                      <BiChevronDown />
                    </div>{" "}
                  </div>
                </div>
              </li>

              <li>
                <div className="homebar">
                  <div className="Pages">
                    {" "}
                    <div className="one_line">
                    <Link to="/cart" className="toright">Pages
                        <div className="menu_home">
                          <ul>
                            <div className="menu_Pages">
                              <div className="menu_one">
                                <li>
                                  <Link to =""> About Us</Link>
                                </li>
                                <li>
                                  <Link to="/">Service Details</Link>
                                </li>
                                <li>
                                  <Link to ="">Request Quote</Link>
                                </li>
                                <li>
                                  <Link to ="">Trucks</Link>
                                </li>
                                <li>
                                  <Link to ="">Gallery Masonry</Link>
                                </li>
                                <li>
                                  <Link to ="">Typography</Link>
                                </li>
                              </div>
                              <div className="menu_two">
                                <li>
                                  <Link to ="">Team</Link>
                                </li>
                                <li>
                                  <Link to ="">Careers</Link>
                                </li>
                                <li>
                                  <Link to ="">Calculator</Link>
                                </li>
                                <li>
                                  <Link to ="">Locations</Link>
                                </li>
                                <li>
                                  <Link to ="">Gallery Grid</Link>
                                </li>

                                <li>
                                  <Link to ="">404</Link>
                                </li>
                              </div>
                              <div className="menu_three">
                                <li>
                                  <Link to ="">Documents</Link>
                                </li>
                                <li>
                                  <Link to ="">Contacts</Link>
                                </li>
                                <li>
                                  <Link to ="">F. A. Q.</Link>
                                </li>
                              </div>
                            </div>
                          </ul>
                        </div>
                        </Link>
                    </div>
                    <div className="menu_icon">
                      {" "}
                      <BiChevronDown />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="homebar">
                  <div className="Services">
                    <div className="one_line">
                      {" "}
                      <Link to="" className="toright">Service Details
                        <div className="menu_home">
                          <ul>
                            <li>
                              <Link to ="">Truck Freight</Link>
                            </li>
                            <li>
                              <Link to ="">Ship Freight</Link>
                            </li>
                            <li>
                              <Link to ="">Plane Freight</Link>
                            </li>
                            <li>
                              <Link to ="">Train Freight</Link>
                            </li>
                          </ul>
                        </div>
                        </Link>
                    </div>
                    <div className="menu_icon">
                      {" "}
                      <BiChevronDown />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="homebar">
                  <div className="Blog">
                    <div className="one_line">
                      {" "}
                      <Link to="/cart" className="toright">
                        BLOG
                        <div className="menu_home">
                          <ul>
                            <li>
                              <Link to =""> Blog Listing</Link>
                            </li>

                            <li>
                              <Link to ="">Blog Post</Link>
                            </li>
                          </ul>
                        </div>
                        </Link>
                    </div>
                    <div className="menu_icon">
                      {" "}
                      <BiChevronDown />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="homebar">
                  <div className="Shop">
                    {" "}
                    <div className="one_line">
                      <Link to ="/products/" className="toright">
                        SHOP
                        <div className="menu_home">
                          <ul>
                            <li>
                              <Link to =""> Product List</Link>
                            </li>

                            <li>
                              <Link to ="">Product Single</Link>
                            </li>
                            <li>
                              <Link to ="">Cart</Link>
                            </li>
                            <li>
                              <Link to="">Checkout</Link>
                            </li>
                            <li>
                              <Link to="">My account</Link>
                            </li>
                          </ul>
                        </div>
                        </Link>{" "}
                    </div>
                    <div className="menu_icon">
                      {" "}
                      <BiChevronDown />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="homebar">
                  <div className="Elements">
                    {" "}
                    <div className="one_line">
                      <Link to="/cart" className="toright">
                        ELEMENTS
                        <div className="menu_home">
                          <ul>
                            <li>
                              <Link to="">Accordion</Link>
                            </li>
                            <li>
                              <Link to="">Alerts</Link>
                            </li>
                            <li>
                              <Link to="">Couters</Link>
                            </li>
                            <li>
                              <Link to="">Tabs</Link>
                            </li>
                            <li>
                              <Link to="">Pricing Plans</Link>
                            </li>
                            <li>
                              <Link to="">Forms</Link>
                            </li>
                            <li>
                              <Link to="">Info Blocks</Link>
                            </li>
                            <li>
                              <Link to="">Icons</Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div className="menu_icon">
                      {" "}
                      <BiChevronDown />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="menu_right">
            <p>GET A QUOTE</p>
          </div>
        </div> 
       
    
       

      </div>
    </div>
  );
};

export default Navbar;
