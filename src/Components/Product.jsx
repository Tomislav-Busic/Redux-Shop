import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Product = ({ product }) => {
  const { id, title, images, description, category, price } = product;
  return (
    <Card style={{ width: "18rem", margin: "1rem" }} id={id}>
      <Card.Img variant="top" src={images[0]} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {category.name} {price}
        </Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
  );
};
