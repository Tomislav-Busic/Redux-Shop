import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardCategory.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../store/slice/products-slice";

export const CardCategory = ({ category }) => {
  const theme = useSelector((state) => state.theme.themeState);
  const { id, name, image } = category;
  const dispatch = useDispatch();

  const handleCategory = () => {
    dispatch(productsActions.showProductsByCategory(id));
  };

  return (
    <Card className="border-secondary card">
      <Card.Img className="card-img" variant="top" src={image} alt={name} />
      <Card.Title className="name">
        <div className="name-container">
          <p>{name}</p>
        </div>
      </Card.Title>
      <Card.Body>
        <Link to={"products"}>
          <Button
            variant={!theme ? "dark" : "secondary"}
            onClick={handleCategory}
          >
            Go to {name}
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
