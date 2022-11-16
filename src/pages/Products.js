import React from "react";
import ProductItem from "../Components/ProductItem";
import ProductsApi from "../api/products";
import Shop from "../Shop";
import Filter from "../Filter"
import Footer from "../Footer"
import CartIcon from "../Components/CartIcon";
import { BiColumns } from "react-icons/bi";
export default class Products extends React.Component{

    state = {
        products: [],
    };

    componentDidMount(){
        ProductsApi.getAll()
            .then( data => {
                this.setState({
                    products: data
                })
            });
    }

    render(){
        return (
            <div className="show_products">
             
<Shop />

<div className="Products_lists">
                <div className="row">
                    {this.state.products.map(product => 
                        <div className={'col-4'} key={product.id}>
                            <ProductItem product={product} />
                        </div>
                    )}
                </div>

                <div className="colum">
                <div className="search">
                    <input type="text"/>
                </div>
<div className="categories">

<span>CATEGORIES</span>
<hr width="80%" color=" #d5d7d8" size="1px" />
    <p>Containers (4)</p>
    <p>Dekivery Boxes (2)</p>
    <p>Packing Materials (2)</p>
    <p>Transport (2)</p>
    <p>Uncategorized (0)</p>
    <p>Wooden Pallets (2)</p>
</div>
<div className="filterd">

<span>FILTER BY PRICE</span>
<hr width="80%" color=" #d5d7d8" padding="10px" />
<div className="btn_filter">
   

    <button className="filtr"> Filtrer</button>
</div>
</div>
<div className="BEST PRODUCTS">
    <span>BEST PRODUCTS</span>
    <hr width="70%" color= "#d5d7d8" />
<br/>
<div className="Best_products">

    
                    {this.state.products.slice(0, 3)
        .map((product, idx) => (
            <div className='card_shop_map' key={product.id}>
      
           
                            <ProductItem key={idx} product={product}  />
                           
                            </div>  
                            
                    ))}
             
                 
                    </div>
       <div className="help_contact_us">
                    <div className="help_products">
              <div className="card_help_products">
                <div className="help_paragraphe">
                  <h1>How we can help you?</h1>
                  <p>Ronquil coho salmon red snapper duckbill lungfish southern angelfish</p>
                  
                   <div className="help_button">
                    <button>Contact US</button>
                  </div>
                  </div>
              </div>
            </div>
      
            </div>
</div>


                </div>
                </div>
                <div className="footer_shop"> <Footer /></div>
             
            </div>
        );
    }
}
