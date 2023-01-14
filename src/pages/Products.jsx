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
  const [productsPerPage, setProductsPerPage] = useState(10);

  const indexOfLastPage = page + productsPerPage;
  const indexOfFirstPage = indexOfLastPage - productsPerPage;

  const onShowSizeChange = (current, pageSize) => {
    setProductsPerPage(pageSize);
  };

  /* const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }

    return originalElement;
  }; */

  return (
    <div className="page">
      <h1>Products</h1>
      <Filters />
      <div className="cards">
        {products.length > 0 ? (
          products
            .filter(
              (product) =>
                product.title.toLowerCase().includes(productName) ||
                product.title.includes(productName)
            )
            .slice(indexOfFirstPage, indexOfLastPage)
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
        showSizeChanger
        /* showQuickJumper */
        onShowSizeChange={onShowSizeChange}
        /* itemRender={itemRender} */
      />
    </div>
  );
};
