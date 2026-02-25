const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-title">
        {product.title.substring(0, 40)}...
      </div>
      <div className="product-price">
        ₹{product.price}
      </div>
    </div>
  );
};

export default ProductCard;