import React from "react";
import { Button, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormatCurrency } from "../tools/formatCurrency";
import { cartActions } from "../store/slice/cart-slice";
import { useDispatch } from "react-redux";

export const CartItem = ({ item }) => {
  const { id, title, image, quantity, totalPrice, price } = item;
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(cartActions.totalRemove(id));
  };

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={image}
        style={{ height: "75px", width: "125px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {title}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".75rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {FormatCurrency(price)}
        </div>
      </div>
      <div>{FormatCurrency(totalPrice)}</div>
      <Button variant="outline-danger" size="sm" onClick={removeFromCart}>
        &times;
      </Button>
    </Stack>
  );
};
