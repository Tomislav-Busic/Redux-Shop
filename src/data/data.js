import axios from "axios";
import { productsActions } from "./../store/slice/products-slice";
import { categoriesAction } from "./../store/slice/categories-slice";

export const fetchCategories = async (dispatch) => {
  const response = await axios
    .get("https://api.escuelajs.co/api/v1/categories/?limit=6")
    .catch((err) => {
      console.log(err);
    });
  dispatch(categoriesAction.showCategories(response.data));
};

export const fetchAllProducts = async (dispatch) => {
  const response = await axios
    .get("https://api.escuelajs.co/api/v1/products")
    .catch((err) => {
      console.log(err);
    });
  dispatch(productsActions.showProducts(response.data));
};

export const fetchAllProductsById = async (dispatch, id) => {
  const response = await axios
    .get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
    .catch((err) => {
      console.log(err);
    });
  dispatch(productsActions.showProducts(response.data));
};

