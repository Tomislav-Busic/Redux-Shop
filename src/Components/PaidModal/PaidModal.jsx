import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PaidModal.scss";
import { stripeActions } from "../../store/slice/stripe-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const PaidModal = () => {
  const user = useSelector((state) => state.stripe.stripeData);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(stripeActions.closeModal());
  };

  return (
    <Card style={{ width: "20rem" }} className="card-modal">
      <Card.Body>
        <Card.Title>Payment Succesful!</Card.Title>
        <Card.Text className="m-2">
          <p>{user.card.name}</p>
          <p>{user.email}</p>
          <p>{user.card.address_city}</p>
          <p>{user.card.address_country}</p>
          <p>{user.card.address_line1}</p>
        </Card.Text>
        <Button variant="success" onClick={closeModal}>
          Close
        </Button>
      </Card.Body>
    </Card>
  );
};
