import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../store/slice/products-slice";
import { CategoryMenu } from "./CategoryMenu";

const Filters = () => {
  const categoryId = useSelector((state) => state.products.categoryId);
  const theme = useSelector((state) => state.theme.themeState);
  const categoryOptions = useSelector(
    (state) => state.categories.categoriesList
  );
  const dispatch = useDispatch();

  const showAllProducts = () => {
    dispatch(productsActions.showAllProducts(true));
  };

  const handleSortByPrice = (value) => {
    dispatch(productsActions.sortProductsByHigherPrice(value));
  };

  const handleSearchByName = (name) => {
    dispatch(productsActions.searchByName(name));
  };

  return (
    <div className="filters">
      <Button
        variant={
          categoryId !== null ? (theme ? "danger" : "secondary") : "warning"
        }
        onClick={showAllProducts}
      >
        All Products
      </Button>
      <div className="cards">
        {categoryOptions.map((option) => (
          <CategoryMenu option={option} key={option.id} />
        ))}
      </div>
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Search by Name"
          onChange={(e) => handleSearchByName(e.target.value)}
        />
      </InputGroup>
      <br />
      <Form.Select onChange={(e) => handleSortByPrice(e.target.value)}>
        <option value="all">Filter by price</option>
        <option value="lower">Lower price</option>
        <option value="higher">Higher price</option>
      </Form.Select>
    </div>
  );
};

export default Filters;
