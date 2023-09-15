import "./checkout-item.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart, decreaseItemFromCart, deleteCartItem } =
    useContext(CartContext);

  const deleteItemHandler = () => deleteCartItem(cartItem);

  const addItemHandler = () => addItemToCart(cartItem);

  const decreaseItemHandler = () => decreaseItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseItemHandler}>
          {" "}
          &#10094;{" "}
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          {" "}
          &#10095;{" "}
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={deleteItemHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckOutItem;
