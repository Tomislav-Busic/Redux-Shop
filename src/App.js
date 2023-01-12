import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  fetchCategories,
  fetchProductsByCategoryId,
} from "./data/data";
import { cartActions } from "./store/slice/cart-slice";
import { favoriteActions } from "./store/slice/favorite-slice";

import { Home } from "./pages/Home";
import { Header } from "./Components/Header";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
import { Cart } from "./Components/Cart";
import { Favorite } from "./Components/Favorite";

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
    dispatch(cartActions.showCartItems(cartItems));
    const favoriteItems = JSON.parse(localStorage.getItem("favoriteItems"));
    dispatch(favoriteActions.showFavItems(favoriteItems));
  }, []);

  useEffect(() => {
    if (carItemsState.length === 0) return;
    localStorage.setItem("cartItems", JSON.stringify(carItemsState));
  }, [carItemsState]);

  useEffect(() => {
    if (favItemsState.length === 0) return;
    localStorage.setItem("favoriteItems", JSON.stringify(favItemsState));
  }, [favItemsState]);

  useEffect(() => {
    if (showAllProducts) fetchAllProducts(dispatch);
  }, [showAllProducts]);

  useEffect(() => {
    if (categoryId !== null) fetchProductsByCategoryId(dispatch, id);
  }, [categoryId]);

  return (
    <Router>
      <Header />
      <Cart />
      <Favorite />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
