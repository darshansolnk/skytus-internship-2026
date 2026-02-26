import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  // 🔥 Hardcoded Credentials
  const VALID_EMAIL = "darshan@gmail.com";
  const VALID_PASSWORD = "Darshan@123";

  const login = async (email, password) => {

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {

      setUser({
        email: email,
        token: "dummy-token-123"
      });

      return { success: true };

    } else {
      return { success: false, message: "Invalid Email or Password" };
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);