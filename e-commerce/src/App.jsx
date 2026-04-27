import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Auth from "./Components/Auth";
import Checkout from "./Components/Checkout";
import Nav from "./Components/Nav";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
