import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { productsActions } from "../store/slice/products-slice";

export const CategoryMenu = ({ option }) => {
  const { id, name } = option;
  const dispatch = useDispatch();
  const choseCategory = () => {
    dispatch(productsActions.showProductsByCategory(id));
  };

  return (
    <Button className="m-1" variant="success" onClick={choseCategory}>
      {name}
    </Button>
  );
};
