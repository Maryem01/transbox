import React from "react";
import { getById } from "../api/products";
import { addToCart } from "../store/actions/actions";
import { connect } from "react-redux";
import ReactStars from "react-rating-stars-component";
import ProductItem from "../Components/ProductItem";
import Shop from "../Shop";
import ProductsApi from "../api/products";
import { MdCheckCircle } from "react-icons/md";
import Footer from "../Footer";
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      quantity: 0,
      product: {},
      show: true,
      max: 5,
      min: 0,
      products: [],
    };
  }
  ratingChanged = (newRating) => {
    console.log(newRating);
  };
  componentDidMount() {
    const id = this.props.match.params.id;

    getById(parseInt(id)).then((product) => {
      this.setState({
        product,
        loading: false,
      });
    });
    ProductsApi.getAll().then((data) => {
      this.setState({
        products: data,
      });
    });
  }

  IncrementItem = () => {
    this.setState((prevState) => {
      if (prevState.quantity < 9) {
        return {
          quantity: prevState.quantity + 1,
        };
      } else {
        return null;
      }
    });
  };
  DecreaseItem = () => {
    this.setState((prevState) => {
      if (prevState.quantity > 0) {
        return {
          quantity: prevState.quantity - 1,
        };
      } else {
        return null;
      }
    });
  };
  ToggleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  handleChange = (event) => {
    this.setState({ quantity: event.target.value });
  };

  addToCart = (product) => {
    this.props.addToCart(product, this.state.quantity);
  };

  render() {
    if (this.state.loading) return "Loading ..";

    const product = this.state.product;
    const quantity = this.state.quantity;

    return (
      <div className="product-id">
        <Shop />
        <div className="myproduct">
          <div className="col-left">
            <img width="400" height="400" src={product.image}></img>
          </div>
          <div className="col-right">
            <br />
            <h1>{product.name}</h1>

            <ReactStars
              value={product.rate}
              count={5}
              onChange={this.ratingChanged}
              size={14}
              activeColor="#ffd700"
            />

            <div className="card-text-price">${product.price}.00
            </div>
            <p>{product.description}</p>
            <br />
            <div className="input_price">
              <button onClick={this.DecreaseItem}>-</button>
              <input
              
                type="number"
                className="inputne"
                value={this.state.quantity}
                onChange={this.handleChange}
                
              />
              <button onClick={this.IncrementItem}>+</button>

              <div className="btn_add">
                <button onClick={() => this.addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
            <p>SKU: 1235</p>
            <p>CATEGORY: CONTAINERS</p>
            <div className="tags_btn">
              <p> Tags :</p>
              <button className="btn_tags">Business</button>
              <button className="btn_tags">Cargo</button>
              <button className="btn_tags">Containers</button>
            </div>
          </div>
        </div>
        <div className="product_left_buttom">
          <button className="btn_tags">Cargo</button>
          <button className="btn_tags">Containers</button>
          <p>
            Trumpeter ropefish bonito roughy cobbler dogteeth tetra sturgeon
            pollock sea snail, saury woody sculpin southern sandfish blue. Tench
            South American darter bobtail snipe eel armored searobin lumpsucker
            combfish flat loach tang píntano spiderfish gunnel. Skilfish,
            halosaur skilfish manefish, bonnetmouth alfonsino largenose fish
            moonfish aruana glowlight danio. Basking shark halibut, North
            Pacific daggertooth, bonnetmouth sand stargazer sand goby. Queen
            triggerfish sand dab hammerhead shark zebra trout pelican gulper,
            common tunny boarfish. Pleco riffle dace flier trunkfish
          </p>
          <div className="product_left_check">
            <p>
              {" "}
              <MdCheckCircle className="checkicon" />
              Shockproof
            </p>
            <p>
              {" "}
              <MdCheckCircle className="checkicon" />
              Wood / cardboard
            </p>
            <p>
              {" "}
              <MdCheckCircle className="checkicon" />
              Environmental material
            </p>
          </div>
          <div className="subtotal">
            <p>
              Width <span> 150 cm</span>{" "}
            </p>

            <hr width="20%" />
            <p>
              Height <span>150 cm</span>{" "}
            </p>
            <hr width="20%" />
            <p>
              Volume<span>75 L</span>{" "}
            </p>
          </div>

          <div className="related">
            <h1>Related products</h1>
          </div>
          <div className="favorite-products">
            {this.state.products.slice(0, 4).map((product, idx) => (
              <div className="card_shopp" key={product.id}>
                <ProductItem key={idx} product={product} />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productsInfo, quantity) =>
      dispatch(addToCart(productsInfo, quantity)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
