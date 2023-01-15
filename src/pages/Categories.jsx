import React from "react";
import { useSelector } from "react-redux";
import { CardCategory } from "../components/CardCategory";

export const Categories = () => {
  const theme = useSelector((state) => state.theme.themeState);
  const categories = useSelector((state) => state.categories.categoriesList);

  return (
    <div className={`page ${theme && "page-change-background"}`}>
      <h1>Categories</h1>
      <div className="cards">
        {categories.map((category) => {
          return <CardCategory key={category.id} category={category} />;
        })}
      </div>
    </div>
  );
};
