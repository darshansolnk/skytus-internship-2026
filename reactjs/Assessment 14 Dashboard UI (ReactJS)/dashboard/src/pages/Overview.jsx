import { useDashboard } from "../context/DashboardContext";
import Card from "../components/Card";

const Overview = () => {

  const { products, users } = useDashboard();

  return (
    <div className="card-grid">
      <Card title="Total Products" value={products.length} />
      <Card title="Total Users" value={users.length} />
      <Card title="Revenue" value="₹ 1,20,000" />
    </div>
  );
};

export default Overview;