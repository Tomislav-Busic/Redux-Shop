import React from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../store/slice/products-slice";
import { CatOption } from "./CatOption";

const Filters = () => {
  const categoryOptions = useSelector(
    (state) => state.categories.categoriesList
  );
  const products = useSelector((state) => state.products.productsList);

  const dispatch = useDispatch();

  const handlePrice = (value) => {
    dispatch(productsActions.sortProductsByHigherPrice(value));
  };

  return (
    <div>
      <div className="cards">
        {categoryOptions.map((option) => (
          <CatOption option={option} />
        ))}
      </div>
      {/* <InputGroup className="mb-3">
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Search by Name"
          onChange={(e) => props.setSearchName(e.target.value)}
        />
      </InputGroup> */}
      <br />
      <Form.Select onChange={(e) => handlePrice(e.target.value)}>
        <option>Filter by price</option>
        <option value="lower">Lower price</option>
        <option value="higher">Higher price</option>
      </Form.Select>
    </div>
  );
};

export default Filters;
