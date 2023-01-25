import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PaidModal.scss";

export const PaidModal = () => {
  return (
    <Card style={{ width: "18rem" }} className="card-modal">
      <Card.Body>
        <Card.Title>Payment Succesful!</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
