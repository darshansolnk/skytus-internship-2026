import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div className="grid">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;
