import React from "react";
import { useSelector } from "react-redux";
import Filters from "../../components/Filters";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import { Pagination } from "antd";
import { usePagination } from "../../hooks/usePagination";
import "./Products.scss";
import { motion } from "framer-motion";

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
    <motion.div
      className={`page ${theme && "page-change-background"}`}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 0.3 }}
    >
      <h1 className={`heading ${theme && "heading-theme"}`}>Products</h1>
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
    </motion.div>
  );
};
