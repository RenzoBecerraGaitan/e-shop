import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import "./cart-dropdown.styles.scss";
import ButtonStyles from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems
          ? cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          : ""}
      </div>
      <ButtonStyles onClick={goToCheckoutHandler}>CHECKOUT</ButtonStyles>
    </div>
  );
};

export default CartDropdown;
