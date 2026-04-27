import { createContext, useState } from "react";

export const authContext = createContext(null);

function AuthContext({ children }) {
  const [user, setUser] = useState(null);

  function signup(email, password) {
    const users = JSON.parse(localStorage.getItem("users") || []);
    const newuser = { email, password };
    users.push(newuser);
    localStorage.setItem("users", JSON.stringify(users));
  }

  return (
    <authContext.Provider value={{ signup }}>{children}</authContext.Provider>
  );
}

export default AuthContext;
