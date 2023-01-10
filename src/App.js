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
  const id = useSelector((state) => state.products.categoryId);
  const showAll = useSelector((state) => state.products.showAll);
  const carItems = useSelector((state) => state.cart.cartList);
  const favItems = useSelector((state) => state.favorite.favList);
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
    if (carItems.length === 0) return;
    localStorage.setItem("cartItems", JSON.stringify(carItems));
  }, [carItems]);

  useEffect(() => {
    if (favItems.length === 0) return;
    localStorage.setItem("favoriteItems", JSON.stringify(favItems));
  }, [favItems]);

  useEffect(() => {
    if (showAll) fetchAllProducts(dispatch);
  }, [showAll]);

  useEffect(() => {
    if (id !== null) fetchProductsByCategoryId(dispatch, id);
  }, [id]);

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
