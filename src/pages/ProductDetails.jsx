import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../data/data";
import { productActions } from "../store/slice/product-slice";
import SimpleImageSlider from "react-simple-image-slider";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormatCurrency } from "../tools/formatCurrency";
import { ProductFavAndCart } from "../components/ProductFavAndCart";

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
    <div
      className={`page ${theme && "page-change-background"}`}
      style={{ textAlign: "center" }}
      key={id}
    >
      {Object.keys(product).length > 0 ? (
        <>
          <h3>{category.name}</h3>
          <SimpleImageSlider
            width={396}
            height={396}
            images={images}
            showBullets={true}
            showNavs={true}
          />
          <h1>{title}</h1>
          <h2>{FormatCurrency(price)}</h2>
          {!toggleDescription ? (
            <div className="description">
              <p>{description.substring(0, 20)}...</p>
              <Button variant="success" onClick={handleDescription}>
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
      <ProductFavAndCart product={product} />
    </div>
  );
};
