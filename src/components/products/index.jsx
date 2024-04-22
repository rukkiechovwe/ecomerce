import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import ProductCard from "../../common/productCard";
import { ProductContext } from "../../context/productContext";
import Loader from "../../common/loader";

const Products = () => {
  const navigate = useNavigate();
  const { item, error } = useContext(ProductContext);

  const create_slug = (slug) => {
    slug = slug.split(" ").join("_");
    slug = slug.split("/").join("_");

    return slug;
  };

  return error ? (
    <p>{error}</p>
  ) : item.products.length === 0 ? (
    <Loader />
  ) : (
    item.products.map((item) => (
      <ProductCard
        title={item.title}
        price={item.price}
        image={item.image}
        key={item.id}
        onClick={() => {
          navigate(`/details/${create_slug(item.title)}`, { state: item });
        }}
      />
    ))
  );
};

export default Products;
