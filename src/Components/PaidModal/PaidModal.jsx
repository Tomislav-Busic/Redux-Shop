import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PaidModal.scss";
import { stripeActions } from "../../store/slice/stripe-slice";
import { cartActions } from "../../store/slice/cart-slice";
import { useDispatch } from "react-redux";

export const PaidModal = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(stripeActions.closeModal());
    dispatch(cartActions.clearCartItems());
  };

  return (
    <Card style={{ width: "18rem" }} className="card-modal">
      <Card.Body>
        <Card.Title>Payment Succesful!</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success" onClick={closeModal}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};
