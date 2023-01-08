import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/slice/cart-slice";

export const Cart = () => {
  const isOpen = useSelector((state) => state.cart.isOpen);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <Offcanvas show={isOpen} onHide={handleToggle} placement="end">
      <Offcanvas.Header closeButton>Cart</Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}></Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
