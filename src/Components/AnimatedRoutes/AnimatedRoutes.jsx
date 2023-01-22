import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Products } from "../../pages/Products/Products";
import { ProductDetails } from "../../pages/ProductDetails/ProductDetails";
import { Categories } from "../../pages/Categories/Categories";

import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<Categories />} />
      </Routes>
    </AnimatePresence>
  );
};
