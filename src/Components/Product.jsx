import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Product = ({ product }) => {
  const { id, title, images, category, price } = product;

  return (
    <Card style={{ width: "18rem", margin: "1rem" }} id={id}>
      <Card.Img variant="top" src={images[0]} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {category.name} {price}
        </Card.Text>
        <Link to={`/product/${id}`}>
          <Button variant="warning">See more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
