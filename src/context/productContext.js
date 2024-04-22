import React, { useEffect, useReducer, useState } from "react";

export const ProductContext = React.createContext();
const initialState = {
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "transformProduct":
      return {
        ...state,
        products: transformProduct(action.payload),
      };
    default:
      throw new Error("Something went wrong");
  }
};

function transformProduct(products) {
  return products.map((product) => {
    return { ...product, quantity: 1 };
  });
}

function ProductContextProvider({ children }) {
  const url = "https://fakestoreapi.com/products";
  const [item, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState("");

  const fetchProducts = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //   console.log(data);
        dispatch({ type: "transformProduct", payload: data });
      })
      .catch((error) => {
        console.log(error);

        if (error?.message === "Network Error") {
          return setError("No Internet Connection");
        }
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ item, error }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
