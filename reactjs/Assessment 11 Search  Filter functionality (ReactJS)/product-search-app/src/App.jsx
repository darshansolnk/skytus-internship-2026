import { useState, useEffect } from "react";
import { fetchProducts } from "./services/productService";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import "./index.css";

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  // Filter + Search + Sort
  useEffect(() => {
    let updated = [...products];

    // Search filter
    if (search) {
      updated = updated.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter
    if (category !== "all") {
      updated = updated.filter(product =>
        product.category === category
      );
    }

    // Sort filter
    if (sort === "low") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      updated.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updated);

  }, [search, category, sort, products]);

  // Get unique categories
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="app-container">
      <h1>Product Store</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <FilterBar
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        categories={categories}
      />

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}

      {!loading && !error && (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
}

export default App;