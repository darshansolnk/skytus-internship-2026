import { Grid } from "@mui/material";
import DashboardCard from "../components/DashboardCard";

const Overview = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <DashboardCard title="Revenue" value="₹ 1,50,000" />
      </Grid>

      <Grid item xs={12} md={4}>
        <DashboardCard title="Users" value="420" />
      </Grid>

      <Grid item xs={12} md={4}>
        <DashboardCard title="Orders" value="135" />
      </Grid>
    </Grid>
  );
};

export default Overview;