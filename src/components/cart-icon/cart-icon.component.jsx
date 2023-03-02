import "./cart-icon.styles.scss";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShopingIcon } from "./../../assets/shoping-bag.svg";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
