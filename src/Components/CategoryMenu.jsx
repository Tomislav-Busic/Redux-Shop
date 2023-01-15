import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../store/slice/products-slice";

export const CategoryMenu = ({ option }) => {
  const { id, name } = option;
  const activeId = useSelector((state) => state.products.categoryId);
  const dispatch = useDispatch();
  const choseCategory = () => {
    dispatch(productsActions.showProductsByCategory(id));
  };

  return (
    <Button
      className="m-1"
      variant={id === activeId ? "warning" : "dark"}
      onClick={choseCategory}
    >
      {name}
    </Button>
  );
};
