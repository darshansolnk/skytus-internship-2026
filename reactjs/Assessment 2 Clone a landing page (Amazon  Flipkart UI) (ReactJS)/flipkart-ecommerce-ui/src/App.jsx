import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import productsData from "./data/products";

function App() {
  const [products, setProducts] = useState(productsData);

  const handleSearch = (text) => {
    const filtered = productsData.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setProducts(filtered);
  };

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <Banner />
      <ProductList products={products} />
      <Footer />
    </>
  );
}

export default App;
