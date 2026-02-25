import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="product-grid">
      {products.length === 0 ? (
        <div className="error">No products found</div>
      ) : (
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;