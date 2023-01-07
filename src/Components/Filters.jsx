import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../store/slice/products-slice";
import { CatOption } from "./CatOption";

const Filters = () => {
  const categoryOptions = useSelector(
    (state) => state.categories.categoriesList
  );
  const dispatch = useDispatch();

  const handlePrice = (value) => {
    dispatch(productsActions.sortProductsByHigherPrice(value));
  };

  const handleSearch = (name) => {
    dispatch(productsActions.searchByName(name));
  };

  return (
    <div className="filters">
      <div className="cards">
        {categoryOptions.map((option) => (
          <CatOption option={option} key={option.id} />
        ))}
      </div>
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Search by Name"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </InputGroup>
      <br />
      <Form.Select onChange={(e) => handlePrice(e.target.value)}>
        <option value="all">Filter by price</option>
        <option value="lower">Lower price</option>
        <option value="higher">Higher price</option>
      </Form.Select>
    </div>
  );
};

export default Filters;
