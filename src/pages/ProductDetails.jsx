import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../data/data";

export const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.singleProduct);

  console.log(product);

  useEffect(() => {
    fetchProduct(dispatch, productId);
  }, [productId]);

  return <div className="page">Product</div>;
};
