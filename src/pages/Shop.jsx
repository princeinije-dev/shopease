
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/Shop.css";

function Shop( {onAddToCart} ) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <div className="shop-header">
  <h2>Shop Our Products</h2>
  <p>Discover something you'll love.</p>
</div>

     <div className="products">
  {products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      onAddToCart={onAddToCart}
    />
  ))}
</div>
    </section>
  );
}

export default Shop;
