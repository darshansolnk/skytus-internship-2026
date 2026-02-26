import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Box } from "@mui/material";

const DashboardLayout = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flex={1}>
        <Header />
        <Box p={3}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;