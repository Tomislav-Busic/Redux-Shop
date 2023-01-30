import React, { useEffect } from "react";
import "./App.scss";
import "antd/dist/reset.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  fetchCategories,
  fetchProductsByCategoryId,
} from "./data/data";
import { cartActions } from "./store/slice/cart-slice";
import { favoriteActions } from "./store/slice/favorite-slice";

import { Header } from "./components/Header/Header";
import { Cart } from "./components/Cart/Cart";
import { Favorites } from "./components/Favorites/Favorites";
import { CartAndFavoritesBtn } from "./components/CartAndFavoritesBtn/CartAndFavoritesBtn";
import { Footer } from "./components/Footer/Footer";
import { AnimatedRoutes } from "./components/AnimatedRoutes/AnimatedRoutes";
import { PaidModal } from "./components/PaidModal/PaidModal";
import { OvrelayModal } from "./components/PaidModal/OvrelayModal";
import { Contact } from "./components/contact/Contact";
import { Whatsapp } from "./components/whatsapp/Whatsapp";

function App() {
  const categoryId = useSelector((state) => state.products.categoryId);
  const showAllProducts = useSelector((state) => state.products.showAll);
  const carItemsState = useSelector((state) => state.cart.cartList);
  const favItemsState = useSelector((state) => state.favorite.favList);
  const paidModal = useSelector((state) => state.stripe.toggleModal);
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
    localStorage.setItem("cartItems", JSON.stringify(carItemsState));
    if (carItemsState.length === 0) localStorage.removeItem("cartItems");
  }, [carItemsState]);

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favItemsState));
    if (favItemsState.length === 0) localStorage.removeItem("favoriteItems");
  }, [favItemsState]);

  useEffect(() => {
    if (showAllProducts) fetchAllProducts(dispatch);
  }, [showAllProducts]);

  useEffect(() => {
    if (categoryId !== null) fetchProductsByCategoryId(dispatch, categoryId);
  }, [categoryId]);

  return (
    <div className="app">
      <Header />
      <Cart />
      <Favorites />
      <CartAndFavoritesBtn />
      <Footer />
      <AnimatedRoutes />
      <Contact />
      <Whatsapp />
      {paidModal && (
        <>
          <PaidModal />
          <OvrelayModal />
        </>
      )}
    </div>
  );
}

export default App;
