import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { productActions } from "../store/slice/product-slice";

export const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product.singleProduct);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await axios
      .get(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(productActions.setProduct(response.data));
  };
  console.log(product);

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return <div className="page">Product</div>;
};
