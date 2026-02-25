const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-title">
        {product.title.substring(0, 40)}...
      </div>
      <div className="product-price">
        ₹ {(product.price * 83).toFixed(2)}
      </div>
    </div>
  );
};

export default ProductCard;