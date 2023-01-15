import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productsActions } from "../store/slice/products-slice";

export const CardCategory = ({ category }) => {
  const { id, name, image } = category;
  const dispatch = useDispatch();

  const handleCategory = () => {
    dispatch(productsActions.showProductsByCategory(id));
  };

  return (
    <Card
      style={{ width: "18rem", margin: "1rem" }}
      className="border-secondary"
    >
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Link to={"products"}>
          <Button variant="dark" onClick={handleCategory}>
            Go to {name}
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
