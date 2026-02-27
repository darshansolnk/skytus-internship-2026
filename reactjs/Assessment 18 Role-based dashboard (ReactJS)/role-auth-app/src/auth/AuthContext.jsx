import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data));
  }, []);

  const login = (email, password) => {
    // Fake users
    if (email === "admin@gmail.com" && password === "123456") {
      const adminUser = { email, role: "admin" };
      localStorage.setItem("user", JSON.stringify(adminUser));
      setUser(adminUser);
      return true;
    }

    if (email === "user@gmail.com" && password === "123456") {
      const normalUser = { email, role: "user" };
      localStorage.setItem("user", JSON.stringify(normalUser));
      setUser(normalUser);
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};