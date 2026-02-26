import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  return (
    <DashboardContext.Provider
      value={{ products, setProducts, users, setUsers }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);