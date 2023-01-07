import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../Components/Filters";
import { Product } from "./../Components/Product";
import { productsActions } from "../store/slice/products-slice";

export const Products = () => {
  const products = useSelector((state) => state.products.productsList);
  const productName = useSelector((state) => state.products.productName);

  return (
    <div className="page">
      <h1>Products</h1>
      <Filters />
      <div className="cards">
        {products.length > 0 ? (
          products
            .filter((product) =>
              product.title.toLowerCase().includes(productName)
            )
            .map((product) => {
              return <Product key={product.id} product={product} />;
            })
        ) : (
          <h1>
            There are currently no these products, please choose another
            category.
          </h1>
        )}
      </div>
    </div>
  );
};
