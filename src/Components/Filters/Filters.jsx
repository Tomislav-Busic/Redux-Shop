import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Filters.scss";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../store/slice/products-slice";
import { paginationActions } from "../../store/slice/pagination-slice";
import { ProductsMenu } from "../ProductsMenu/ProductsMenu";

const Filters = () => {
  const categoryId = useSelector((state) => state.products.categoryId);
  const theme = useSelector((state) => state.theme.themeState);
  const categoryOptions = useSelector(
    (state) => state.categories.categoriesList
  );
  const dispatch = useDispatch();

  const showAllProducts = () => {
    dispatch(productsActions.showAllProducts(true));
    dispatch(paginationActions.startPage());
  };

  const handleSortByPrice = (value) => {
    dispatch(productsActions.sortProductsByHigherPrice(value));
  };

  const handleSearchByName = (name) => {
    dispatch(productsActions.searchByName(name));
  };

  return (
    <div className="filters">
      <div className="btn-menu">
        <p
          onClick={showAllProducts}
          className={`category ${
            categoryId !== null
              ? theme
                ? "theme"
                : ""
              : theme
              ? "theme active-theme"
              : "active"
          }`}
        >
          All Products
        </p>
        {categoryOptions.map((option) => (
          <ProductsMenu option={option} key={option.id} />
        ))}
      </div>
      <div className="input-form-container">
        <InputGroup className="inp-for">
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Search by Name"
            onChange={(e) => handleSearchByName(e.target.value)}
          />
        </InputGroup>
        <Form.Select
          className="inp-for"
          onChange={(e) => handleSortByPrice(e.target.value)}
        >
          <option value="all">Filter by price</option>
          <option value="lower">Lower price</option>
          <option value="higher">Higher price</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default Filters;
