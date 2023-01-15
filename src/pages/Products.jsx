import React from "react";
import { useSelector } from "react-redux";
import Filters from "../components/Filters";
import { CardProduct } from "../components/CardProduct";
import { Pagination } from "antd";
import { usePagination } from "../hooks/usePagination";

export const Products = () => {
  const theme = useSelector((state) => state.theme.themeState);
  const products = useSelector((state) => state.products.productsList);
  const productName = useSelector((state) => state.products.productName);
  const page = useSelector((state) => state.pagination.page);
  const productsPerPage = useSelector(
    (state) => state.pagination.productsPerPage
  );

  const [indexOfLastPage, indexOfFirstPage, onShowSizeChange, setPage] =
    usePagination();

  const total = products.length;

  return (
    <div className={`page ${theme && "page-change-background"}`}>
      <h1>Products</h1>
      <Filters />
      <div className="cards">
        {products?.length > 0 ? (
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
