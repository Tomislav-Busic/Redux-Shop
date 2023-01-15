import React from "react";
import { useSelector } from "react-redux";
import { CardCategory } from "../components/CardCategory";

export const Categories = () => {
  const categories = useSelector((state) => state.categories.categoriesList);

  return (
    <div className="page">
      <h1>Categories</h1>
      <div className="cards">
        {categories.map((category) => {
          return <CardCategory key={category.id} category={category} />;
        })}
      </div>
    </div>
  );
};
