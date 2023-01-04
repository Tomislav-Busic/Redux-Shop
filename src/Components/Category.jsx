import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Category = ({ category }) => {
  const { id, name, image } = category;

  return (
    <Card style={{ width: "18rem", margin: "1rem" }} id={id}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button variant="primary">Go to {name}</Button>
      </Card.Body>
    </Card>
  );
};
