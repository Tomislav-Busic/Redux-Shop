import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductsMenu.scss";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../store/slice/products-slice";
import { paginationActions } from "../../store/slice/pagination-slice";

export const ProductsMenu = ({ option }) => {
  const { id, name } = option;
  const activeId = useSelector((state) => state.products.categoryId);
  const theme = useSelector((state) => state.theme.themeState);
  const dispatch = useDispatch();
  const choseCategory = () => {
    dispatch(productsActions.showProductsByCategory(id));
    dispatch(paginationActions.startPage());
  };

  return (
    <p
      onClick={choseCategory}
      className={`category ${
        id === activeId
          ? theme
            ? "theme active-theme"
            : "active"
          : theme
          ? "theme"
          : ""
      }`}
    >
      {name}
    </p>
  );
};
