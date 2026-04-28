import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Context/AuthContext";

function Nav() {
  const { user, logout } = useContext(authContext);
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to={"/"} className="navbar-brand">
          ShopeHub
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/checkout" className="navbar-link">
            Cart
          </Link>
        </div>
        <div className="navbar-auth">
          {!user ? (
            <div className="navbar-auth-links">
              <Link to={"/auth"} className="btn btn-secondary">
                Login
              </Link>
              <Link to={"/auth"} className="btn btn-primary">
                SignUp
              </Link>
            </div>
          ) : (
            <div className="navbar-user">
              <span className="navbar-greeting">hello {user.email}</span>
              <button onClick={logout} className="btn btn-secondary">
                logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
