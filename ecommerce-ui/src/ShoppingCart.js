import React from "react";
import AirbnbButton from "./AirbnbButton";
import PropTypes from "prop-types";

class ShoppingCart extends React.Component {
  render() {
    const CartList = this.props.airbnbs.map((airbnb, idx) => {
      return (
        <li key={idx}>
          <img src={airbnb.image} alt={airbnb.title}/>
          <AirbnbButton
            airbnb={airbnb}
            onClick={this.props.onDeleteAirbnb}
            idx={idx}
            key={idx}
            buttonText="Remove"
          />
        </li>
      );
    });

    return (
      <div className="cart">
          <div className="cart-meta">
        <h2 className="offscreen">Cart</h2>
        <i aria-hidden="true" className="material-icons">
          shopping_cart
        </i>
        <span aria-live="polite" aria-atomic="true">
          {CartList.length}
          <span className="offscreen"> items in cart</span>
        </span>
        </div>
        <ul>{CartList}</ul>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
    airbnbs: PropTypes.array.isRequired,
    onDeleteAirbnb: PropTypes.func.isRequired
  };

export default ShoppingCart;
