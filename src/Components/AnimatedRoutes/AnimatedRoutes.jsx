import React from "react";
import { Route, Routes } from "react-router-dom";
import { Products } from "../../pages/Products/Products";
import { ProductDetails } from "../../pages/ProductDetails/ProductDetails";
import { Categories } from "../../pages/Categories/Categories";

export const AnimatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
      <Route path="*" element={<Categories />} />
    </Routes>
  );
};
