import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Auth from "./Components/Auth";
import Checkout from "./Components/Checkout";
import Nav from "./Components/Nav";
import AuthContext from "./Context/AuthContext";

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
        </Routes>
      </div>
    </AuthContext>
  );
}

export default App;
