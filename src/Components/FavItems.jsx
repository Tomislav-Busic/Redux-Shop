import React from "react";
import { Button, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { favoriteActions } from "../store/slice/favorite-slice";
import { Link } from "react-router-dom";

export const FavItems = ({ item }) => {
  const { id, image, name } = item;
  const dispatch = useDispatch();

  const removeFromFav = () => {
    dispatch(favoriteActions.removeFromFav(id));
  };

  const closeFav = () => {
    dispatch(favoriteActions.toggleFav());
  };

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={image}
        style={{ height: "75px", width: "125px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <h5>{name}</h5>
      </div>
      <Link to={`/product/${id}`}>
        <Button variant="outline-success" size="sm" onClick={closeFav}>
          Go to product
        </Button>
      </Link>
      <Button variant="outline-danger" size="sm" onClick={removeFromFav}>
        Remove
      </Button>
    </Stack>
  );
};
