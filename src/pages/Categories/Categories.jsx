import React from "react";
import { useSelector } from "react-redux";
import { CardCategory } from "../../components/CardCategory/CardCategory";
import { motion } from "framer-motion";

export const Categories = () => {
  const theme = useSelector((state) => state.theme.themeState);
  const categories = useSelector((state) => state.categories.categoriesList);

  return (
    <motion.div
      className={`page ${theme && "page-change-background"}`}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 0.3 }}
    >
      <h1 className={`heading ${theme && "heading-theme"}`}>Categories</h1>
      <div className="cards">
        {categories.map((category) => {
          return <CardCategory key={category.id} category={category} />;
        })}
      </div>
    </motion.div>
  );
};
