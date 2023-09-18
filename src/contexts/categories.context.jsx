import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase.utils.js";

// import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

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
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
