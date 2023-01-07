import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  fetchCategories,
  fetchAllProductsById,
} from "./data/data";

import { Home } from "./pages/Home";
import { Header } from "./Components/Header";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";

function App() {
  const id = useSelector((state) => state.products.categoryId);
  const showAll = useSelector((state) => state.products.showAll);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllProducts(dispatch);
    fetchCategories(dispatch);
  }, []);

  useEffect(() => {
    if (showAll) fetchAllProducts(dispatch);
  }, [showAll]);

  useEffect(() => {
    fetchAllProductsById(id);
  }, [id]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={
            <h1 style={{ padding: "4rem" }}>
              Page not found... Please go back.
            </h1>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
