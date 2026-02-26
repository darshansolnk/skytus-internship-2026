import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "white",
        color: "#333",
        borderBottom: "1px solid #eee",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">
          Dashboard
        </Typography>

        <Avatar sx={{ bgcolor: "#5b5fc7" }}>A</Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Header;