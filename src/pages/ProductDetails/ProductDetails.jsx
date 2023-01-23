import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../data/data";
import { productActions } from "../../store/slice/product-slice";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormatCurrency } from "../../tools/formatCurrency";
import { ProductFavAndCart } from "../../components/ProductFavAndCart/ProductFavAndCart";
import { ImageSlider } from "../../components/ImageSlider/ImageSlider";
import "./ProductDetails.scss";
import { motion } from "framer-motion";

export const ProductDetails = () => {
  const { productId } = useParams();
  const theme = useSelector((state) => state.theme.themeState);
  const product = useSelector((state) => state.product.singleProduct);
  const toggleDescription = useSelector(
    (state) => state.product.toggleDescription
  );
  const { id, title, price, images, category, description } = product;
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProduct(dispatch, productId);
    return () => {
      dispatch(productActions.cleanProduct());
    };
  }, [dispatch, productId]);

  const handleDescription = () => {
    dispatch(productActions.productDescription());
  };

  return (
    <motion.div
      className={`page ${theme && "page-change-background"}`}
      key={id}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 0.2 }}
    >
      {Object.keys(product).length > 0 ? (
        <>
          <ImageSlider images={images} category={category.name} />
          <br />
          <h1 className="heading-price">{title}</h1>
          <br />
          <h2 className={`price ${theme && "price-theme"}`}>
            {FormatCurrency(price)}
          </h2>
          <br />
          {!toggleDescription ? (
            <div className={`description ${theme && "description-theme"}`}>
              <p>{description.substring(0, 20)}...</p>
              <Button
                variant={theme ? "dark" : "secondary"}
                onClick={handleDescription}
              >
                See more
              </Button>
            </div>
          ) : (
            <div className="description">
              <p>{description}</p>
              <Button variant="secondary" onClick={handleDescription}>
                See less
              </Button>
            </div>
          )}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
      <br />
      <ProductFavAndCart product={product} />
    </motion.div>
  );
};
