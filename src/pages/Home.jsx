import React, { useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const fetchCategories = async () => {
    const response = await axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .catch((err) => {
        console.log(err);
      });
    console.log(response.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="page">
      <h1>Home</h1>
    </div>
  );
};
