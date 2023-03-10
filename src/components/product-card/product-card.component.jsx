import "./product-card.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import ButtonStyles from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`}></img>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonStyles
        type="button"
        buttonType="inverted"
        onClick={addProductToCart}
      >
        Add to Card
      </ButtonStyles>
    </div>
  );
};

export default ProductCard;
