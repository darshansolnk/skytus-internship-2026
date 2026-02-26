import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const DashboardCard = React.memo(({ title, value }) => {
  return (
    <Card
      sx={{
        background: "linear-gradient(135deg, #ffffff, #f1f3ff)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
        },
      }}
    >
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h4" fontWeight="bold" mt={1}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default DashboardCard;