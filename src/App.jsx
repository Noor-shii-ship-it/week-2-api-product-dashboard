
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          "https://dummyjson.com/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [retryCount]);

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Product Dashboard</h1>
        <p>Explore products using API integration</p>
      </header>

      <main className="dashboard-content">
        <h2>All Products</h2>

        <div className="product-controls">
          <input
            type="text"
            className="product-search"
            placeholder="Search products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search products"
          />

          <select
            className="category-select"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            aria-label="Filter by category"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item === "all"
                  ? "All Categories"
                  : item.replace(/-/g, " ")}
              </option>
            ))}
          </select>
        </div>

        {!loading && !error && (
          <p className="product-count">
            Showing {filteredProducts.length} products
          </p>
        )}

        {loading && (
          <p className="status" role="status">
            Loading products...
          </p>
        )}

        {error && (
          <div className="error-container">
            <p className="error" role="alert">
              {error}
            </p>

            <button
              className="details-button"
              onClick={() => setRetryCount((count) => count + 1)}
              disabled={loading}
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && filteredProducts.length === 0 && (
          <p className="status">
            No products found. Try another search.
          </p>
        )}

        {!loading && !error && filteredProducts.length > 0 && (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  loading="lazy"
                />

                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <strong>${product.price}</strong>

                  <button
                    className="details-button"
                    onClick={() => setSelectedProduct(product)}
                  >
                    View Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {selectedProduct && (
        <div
          className="product-modal-overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProduct(null);
            }
          }}
        >
          <section
            className="product-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-detail-title"
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
            >
              ×
            </button>

            <img
              className="modal-image"
              src={selectedProduct.thumbnail}
              alt={selectedProduct.title}
            />

            <h2 id="product-detail-title">
              {selectedProduct.title}
            </h2>

            <p>{selectedProduct.description}</p>

            <p>
              <strong>Category:</strong>{" "}
              {selectedProduct.category}
            </p>

            <p>
              <strong>Price:</strong> ${selectedProduct.price}
            </p>

            <p>
              <strong>Rating:</strong> {selectedProduct.rating} / 5
            </p>

            <p>
              <strong>Stock:</strong> {selectedProduct.stock}
            </p>

            <button
              className="details-button"
              onClick={() => setSelectedProduct(null)}
            >
              Back to Products
            </button>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;

