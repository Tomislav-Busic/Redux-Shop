import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { categoriesAction } from "../store/categories-slice";
import { Category } from "../Components/Category";

export const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categoriesList);

  const fetchCategories = async () => {
    const response = await axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .catch((err) => {
        console.log(err);
      });
    dispatch(categoriesAction.showCategories(response.data));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  console.log(categories);

  return (
    <div className="page">
      <h1>Categories</h1>
      <div className="cards">
        {categories.map((category) => {
          return <Category key={category.id} category={category} />;
        })}
      </div>
    </div>
  );
};
