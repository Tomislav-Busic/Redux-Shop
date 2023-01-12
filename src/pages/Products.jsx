import React, { useState } from "react";
import { useSelector } from "react-redux";
import Filters from "../Components/Filters";
import { CardProduct } from "../Components/CardProduct";
import { Pagination } from "antd";

export const Products = () => {
  const products = useSelector((state) => state.products.productsList);
  const productName = useSelector((state) => state.products.productName);

  const total = products.length;
  const [page, setPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  const indexOfLastPage = page + productsPerPage;
  const indexOfFirstPage = indexOfLastPage - productsPerPage;
  const currentProducts = products.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <div className="page">
      <h1>Products</h1>
      <Filters />
      <div className="cards">
        {products.length > 0 ? (
          currentProducts
            .filter(
              (product) =>
                product.title.toLowerCase().includes(productName) ||
                product.title.includes(productName)
            )
            .map((product) => {
              return <CardProduct key={product.id} product={product} />;
            })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <Pagination
        onChange={(value) => setPage(value)}
        pageSize={productsPerPage}
        total={total}
        current={page}
      />
    </div>
  );
};
