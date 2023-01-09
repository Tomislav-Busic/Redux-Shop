import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FormatCurrency } from "../tools/formatCurrency";
import { cartActions } from "../store/slice/cart-slice";
import { favoriteActions } from "../store/slice/favorite-slice";
import { useDispatch } from "react-redux";

export const CardProduct = ({ product }) => {
  const { id, title, images, category, price } = product;
  const [image, setImage] = useState(images[0]);
  const dispatch = useDispatch();

  const handleImage = (img) => {
    setImage(img);
  };

  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        id: id,
        title: title,
        price: price,
        image: images[0],
      })
    );
  };

  const addToFav = () => {
    dispatch(
      favoriteActions.addToFavList({
        id: id,
        name: title,
        image: images[0],
      })
    );
  };

  return (
    <Card
      style={{ width: "18rem", margin: "1rem" }}
      id={id}
      className="border-primary position-relative"
    >
      <Card.Img variant="top" src={image} />
      <Button
        className="position-absolute"
        size="sm"
        variant="warning"
        style={{ right: "0.5rem", top: "0.5rem", padding: "0" }}
      >
        {category.name}
      </Button>
      <div
        className="position-absolute d-flex flex-column"
        style={{ bottom: "9rem" }}
      >
        {images?.map((img) => (
          <img
            onClick={() => handleImage(img)}
            style={{
              height: "2rem",
              margin: "2px",
              cursor: "pointer",
              border: "1px solid grey",
            }}
            src={img}
          />
        ))}
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{FormatCurrency(price)}</Card.Text>
        <div className="d-flex">
          <Link to={`/product/${id}`}>
            <Button variant="primary">See more</Button>
          </Link>
          <div className="d-flex m-auto">
            <Link
              style={{
                position: "relative",
              }}
              onClick={addToCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                style={{
                  height: "1.7rem",
                  marginRight: "1rem",
                  fill: "#333",
                }}
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z" />
              </svg>
            </Link>
            <Link
              style={{
                position: "relative",
              }}
              onClick={addToFav}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{
                  height: "1.7rem",
                  fill: "crimson",
                }}
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
            </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
