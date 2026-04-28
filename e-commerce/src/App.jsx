import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Auth from "./Components/Auth";
import Checkout from "./Components/Checkout";
import Nav from "./Components/Nav";
import AuthContext from "./Context/AuthContext";
import ProductDiscription from "./Components/ProductDiscription";

import "./App.css";

function App() {
  return (
    <AuthContext>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products/:id" element={<ProductDiscription />} />
        </Routes>
      </div>
    </AuthContext>
  );
}

export default App;
