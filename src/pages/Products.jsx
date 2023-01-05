import React from "react";
import { useSelector } from "react-redux";
import { Product } from "./../Components/Product";

export const Products = () => {
  const products = useSelector((state) => state.products.productsList);

  return (
    <div className="page">
      <h1>Products</h1>
      <div className="cards">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
