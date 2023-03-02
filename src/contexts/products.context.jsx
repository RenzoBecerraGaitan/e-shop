import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  // useEffect(() => {
  //   // fetch("../shop-data.json")
  //   //   .then((response) => response.json())
  //   //   .then((products) => setProducts(products))
  //   //   .catch((error) => console.error(error));
  //   PRODUCTS.map((products) => {
  //     return setProducts(products);
  //   });
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
