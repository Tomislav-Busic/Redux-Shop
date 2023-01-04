import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./Components/Header";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={
            <h1 style={{ padding: "4rem" }}>
              Page not found... Please go back.
            </h1>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
