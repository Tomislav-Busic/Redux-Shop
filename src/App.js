import React, { useEffect } from "react";
import "./App.scss";
import "antd/dist/reset.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  fetchCategories,
  fetchProductsByCategoryId,
} from "./data/data";
import { cartActions } from "./store/slice/cart-slice";
import { favoriteActions } from "./store/slice/favorite-slice";

import { Categories } from "./pages/Categories";
import { Header } from "./components/Header/Header";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import { Cart } from "./components/Cart";
import { Favorite } from "./components/Favorite";
import { Footer } from "./components/Footer/Footer";

function App() {
  const categoryId = useSelector((state) => state.products.categoryId);
  const showAllProducts = useSelector((state) => state.products.showAll);
  const carItemsState = useSelector((state) => state.cart.cartList);
  const favItemsState = useSelector((state) => state.favorite.favList);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllProducts(dispatch);
    fetchCategories(dispatch);
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) dispatch(cartActions.showCartItems(cartItems));
    const favoriteItems = JSON.parse(localStorage.getItem("favoriteItems"));
    if (favoriteItems) dispatch(favoriteActions.showFavItems(favoriteItems));
  }, []);

  useEffect(() => {
    if (carItemsState?.length === 0) return;
    localStorage.setItem("cartItems", JSON.stringify(carItemsState));
  }, [carItemsState]);

  useEffect(() => {
    if (favItemsState?.length === 0) return;
    localStorage.setItem("favoriteItems", JSON.stringify(favItemsState));
  }, [favItemsState]);

  useEffect(() => {
    if (showAllProducts) fetchAllProducts(dispatch);
  }, [showAllProducts]);

  useEffect(() => {
    if (categoryId !== null) fetchProductsByCategoryId(dispatch, categoryId);
  }, [categoryId]);

  return (
    <div className="app">
      <Router>
        <Header />
        <Cart />
        <Favorite />
        <Footer />
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
