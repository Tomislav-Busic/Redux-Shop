import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>
);


/*
npm i redux react-redux
npm i react-router-dom
npm i axios
npm install @reduxjs/toolkit
npm i bootstrap react-bootstrap
npm install react-simple-image-slider
npm i antd
npm i sass
npm i gh-pages --save-dev
npm run deploy
npm i framer-motion
*/