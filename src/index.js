import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


/*
npm i redux react-redux
npm i react-router-dom
npm i axios
npm install @reduxjs/toolkit
npm i bootstrap react-bootstrap
npm install react-simple-image-slider
npm i antd
*/