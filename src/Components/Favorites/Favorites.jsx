import React from "react";
import { Offcanvas, Stack, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { favoriteActions } from "../../store/slice/favorite-slice";
import { FavItems } from "./FavItems";

export const Favorites = () => {
  const isOpen = useSelector((state) => state.favorite.showFavorite);
  const favItems = useSelector((state) => state.favorite.favList);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(favoriteActions.toggleFav());
  };

  return (
    <Offcanvas
      style={{ textAlign: "center" }}
      show={isOpen}
      onHide={handleToggle}
      placement="end"
    >
      <Offcanvas.Header closeButton>Favorites</Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {favItems?.length > 0 ? (
            favItems?.map((item) => <FavItems item={item} key={item.id} />)
          ) : (
            <h3>
              You have no products in your favorite yet, please choose some from{" "}
              <Link to="/products">
                <Button size="sm" onClick={handleToggle}>
                  {" "}
                  Products
                </Button>
              </Link>
            </h3>
          )}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
