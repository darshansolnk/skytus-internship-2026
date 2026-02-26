import { Drawer, List, ListItemButton, ListItemText, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          background: "linear-gradient(180deg, #5b5fc7, #8e54e9)",
          color: "white",
        },
      }}
    >
      <Box p={3} fontSize="20px" fontWeight="bold">
        Admin Panel
      </Box>

      <List>
        <ListItemButton onClick={() => navigate("/dashboard/overview")}>
          <ListItemText primary="Overview" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/dashboard/products")}>
          <ListItemText primary="Products" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;