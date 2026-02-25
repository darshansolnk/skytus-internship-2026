import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/api";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {

  const { id } = useParams();   // 🔥 Dynamic ID from URL
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductById(id);
        setProduct(res.data);
      } catch {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="details-container">
      <img src={product.image} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>₹ {(product.price * 83).toFixed(0)}</h3>
        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;