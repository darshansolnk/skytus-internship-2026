import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import { fetchProducts } from "./services/productService";
import "./index.css";

function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError("Something went wrong while fetching products.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <h1>Product Store</h1>

      {loading && <div className="loading">Loading products...</div>}
      {error && <div className="error">{error}</div>}

      {!loading && !error && <ProductList products={products} />}
    </>
  );
}

export default App;