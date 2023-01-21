import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.scss";
import { useSelector } from "react-redux";

export const Footer = () => {
  const theme = useSelector((state) => state.theme.themeState);

  let date = new Date();
  let today = date.getFullYear();

  return (
    <div className={`footer ${theme && "footer-theme"}`}>
      <p>
        Copyright &copy; {today}{" "}
        <a href="http://xn--tomislavbui-vlb28i.com/">Created by TBW</a>
      </p>
    </div>
  );
};
