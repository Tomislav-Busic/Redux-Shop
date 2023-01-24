import React from "react";
import { Offcanvas, Stack, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/slice/cart-slice";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import { FormatCurrency } from "../tools/formatCurrency";
import { StripeBtn } from "./StripeBtn/StripeBtn";

export const Cart = () => {
  let total = 0;
  const isOpen = useSelector((state) => state.cart.isOpen);
  const cartItems = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();
  cartItems?.forEach((item) => (total += item.totalPrice));

  const handleToggle = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <Offcanvas show={isOpen} onHide={handleToggle} placement="end">
      <Offcanvas.Header closeButton>Cart</Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems?.length > 0 ? (
            cartItems?.map((item) => <CartItem item={item} key={item.id} />)
          ) : (
            <h1>
              You have no products in your cart yet, please choose some from{" "}
              <Link to="/products">
                <Button onClick={handleToggle}> Products</Button>
              </Link>
            </h1>
          )}
          <div className="ms-auto fw-bold fs-4">
            Total {FormatCurrency(total)}
          </div>
          <StripeBtn price={total} />
          <div>
            <br />
            <br />
            <h5>
              To test payment functionality Stripe provides dummy card details
              which you can fill to test:
            </h5>
            <br />
            <h2>4242 4242 4242 4242 - Exp: 01/28 - CVV: 123</h2>
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
