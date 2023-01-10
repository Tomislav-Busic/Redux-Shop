import axios from "axios";
import { productsActions } from "./../store/slice/products-slice";
import { categoriesAction } from "./../store/slice/categories-slice";
import { productActions } from "../store/slice/product-slice";

export const fetchCategories = async (dispatch) => {
  const response = await axios
    .get("https://api.escuelajs.co/api/v1/categories/?limit=5")
    .catch((error) => {
      console.log("Err", error.message);
    });
  dispatch(categoriesAction.showCategories(response.data));
};

export const fetchAllProducts = async (dispatch) => {
  const response = await axios
    .get("https://api.escuelajs.co/api/v1/products")
    .catch((error) => {
      console.log("Err", error.message);
    });
  dispatch(productsActions.showProducts(response.data));
};

export const fetchProductsByCategoryId = async (dispatch, id) => {
  const response = await axios
    .get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
    .catch((error) => {
      console.log("Err", error.message);
    });
  dispatch(productsActions.showProducts(response.data));
};

export const fetchProduct = async (dispatch, productId) => {
  const response = await axios
    .get(`https://api.escuelajs.co/api/v1/products/${productId}`)
    .catch((error) => {
      console.log("Err", error.message);
    });
  dispatch(productActions.setProduct(response.data));
};
