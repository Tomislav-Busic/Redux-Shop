import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { productsActions } from "./store/slice/products-slice";
import { categoriesAction } from "./store/slice/categories-slice";
import { useDispatch, useSelector } from "react-redux";

import { Home } from "./pages/Home";
import { Header } from "./Components/Header";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";

function App() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.products.categoryId);

  const fetchCategories = async () => {
    const response = await axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .catch((err) => {
        console.log(err);
      });
    dispatch(categoriesAction.showCategories(response.data));
  };

  const fetchAllProducts = async () => {
    const response = await axios
      .get("https://api.escuelajs.co/api/v1/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(productsActions.showProducts(response.data));
  };

  const fetchAllProductsById = async () => {
    const response = await axios
      .get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(productsActions.showProducts(response.data));
  };

  useEffect(() => {
    fetchAllProductsById();
  }, [id]);

  useEffect(() => {
    fetchCategories();
    fetchAllProducts();
  }, []);

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
