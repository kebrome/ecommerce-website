import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { authContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Auth() {
  const { signup, user, logout, login } = useContext(authContext);
  const [mode, setMode] = useState("signup");
  const [error, setError] = useState(null);
  const navigat = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   console.log(signup);
  function onSubmit(data) {
    let result;

    if (mode === "signup") {
      // signup(data.email, data.password);
      result = signup(data.email, data.password);
    } else {
      // login(data.email, data.password);
      result = login(data.email, data.password);
    }
    if (result.success) {
      navigat("/");
    } else {
      setError(result.error);
    }
  }
  console.log(logout);
  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">
            {mode === "signup" ? "SignUP" : "Login"}
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
            <div className="form-group">
              {user && <p>u ar logged in {user.email}</p>}
              {error && <p className="error-message">{error}</p>}
              <label className="form-lable" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="form-input"
                id="email"
                {...register("email", { required: "email is required" })}
              />
              {errors.email && (
                <p className="form-error">{errors.email.message}</p>
              )}
            </div>
            <div className="form-group">
              <label className="form-lable" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className="form-input"
                id="password"
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="form-error">{errors.password.message}</p>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              {mode === "signup" ? "SignUP" : "Login"}
            </button>
          </form>
          <div className="auth-switch">
            {mode === "signup" ? (
              <p>
                Already have an account?
                <span className="auth-link" onClick={() => setMode("login")}>
                  login
                </span>
              </p>
            ) : (
              <p>
                Don't have an account?
                <span className="auth-link" onClick={() => setMode("signup")}>
                  signup
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
