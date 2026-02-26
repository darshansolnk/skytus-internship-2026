import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { useDashboard } from "../context/DashboardContext";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Products = () => {

  const { products, setProducts } = useDashboard();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProducts();
        setProducts(res.data);
      } catch {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div>
      <h3>Products List</h3>
      {products.slice(0,5).map(product => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
};

export default Products;