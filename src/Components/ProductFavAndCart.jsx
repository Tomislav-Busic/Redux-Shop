import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormatCurrency } from "../tools/formatCurrency";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../store/slice/product-slice";
import { cartActions } from "../store/slice/cart-slice";

export const ProductFavAndCart = ({ product }) => {
  const { id, title, price, images } = product;

  const toggleProductCart = useSelector(
    (state) => state.product.toggleProductCart
  );
  const cartProducts = useSelector((state) => state.cart.cartList);

  const dispatch = useDispatch();

  const thisProduct = cartProducts.find((product) => product.id === id);

  const handleProductCart = () => {
    dispatch(productActions.showProductCart());
    dispatch(
      cartActions.addToCart({
        id: id,
        title: title,
        price: price,
        image: images[0],
      })
    );
  };

  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        id: id,
        title: title,
        price: price,
        image: images[0],
      })
    );
  };

  const removeFromCart = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  console.log(cartProducts);

  return (
    <div className="d-flex flex-column align-items-center">
      {thisProduct && toggleProductCart && (
        <div className="d-flex m-2">
          <Button onClick={removeFromCart}>-</Button>
          <h4 className="m-1">{FormatCurrency(thisProduct?.totalPrice)}</h4>
          <Button onClick={addToCart}>+</Button>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "baseline",
          marginTop: "1rem",
        }}
      >
        <Button variant="warning" className="m-1" onClick={handleProductCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            style={{
              height: "1.5rem",
              fill: "crimson",
            }}
          >
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
        </Button>
        <Button className="m-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{
              height: "1.7rem",
              fill: "crimson",
            }}
          >
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
        </Button>
      </div>
    </div>
  );
};
