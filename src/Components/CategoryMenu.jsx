import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../store/slice/products-slice";

export const CategoryMenu = ({ option }) => {
  const { id, name } = option;
  const activeId = useSelector((state) => state.products.categoryId);
  const theme = useSelector((state) => state.theme.themeState);
  const dispatch = useDispatch();
  const choseCategory = () => {
    dispatch(productsActions.showProductsByCategory(id));
  };

  return (
    <Button
      className="m-1"
      variant={id === activeId ? "warning" : !theme ? "dark" : "success"}
      onClick={choseCategory}
    >
      {name}
    </Button>
  );
};
