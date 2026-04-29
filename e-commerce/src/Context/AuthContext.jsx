import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext(null);

function AuthContext({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    localStorage.getItem("currentUserEmail")
      ? { email: localStorage.getItem("currentUserEmail") }
      : null,
  );

  function signup(email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === email)) {
      return { success: false, error: "email already exists" };
    }
    const newuser = { email, password };
    users.push(newuser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUserEmail", email);

    setUser(email);
    navigate("/");

    return { success: true };
  }
  function login(email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (!user) {
      return { success: false, error: "invalid email or password" };
    }
    localStorage.setItem("currentUserEmail", email);
    setUser({ email });
    navigate("/");
    return { success: true };
  }

  function logout() {
    localStorage.removeItem("currentUserEmail");
    setUser(null);
    navigate("/auth");
  }

  return (
    <authContext.Provider value={{ signup, user, logout, login }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthContext;
