import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import "../styles/List.css";
import axios from "axios";

const ProductList = () => {
  const [a, setA] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2; // Shows 2 products per page

  useEffect(() => {
    async function take() {
      try {
        const res = await axios.get("https://ecommerce-backend-navy.vercel.app/list");
        setA(res.data);
        setLoading(false);
      } catch (err) {
        console.log("error in take loading", err);
        setLoading(false);
      }
    }
    take();
  }, []); // Empty dependency array prevents infinite loops

  if (loading) {
    return <div className="loading-state">Loading...</div>;
  }

  // Slice the array to only grab the items for the current page (e.g., 2 items)
  const visibleProducts = a.slice(currentIndex, currentIndex + itemsPerPage);

  const handleNext = () => {
    if (currentIndex + itemsPerPage < a.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

 return (
  <div className="product-catalog-page">

 

    <section className="product-section">

      <div className="section-top">
        <span>{a.length} PRODUCTS</span>

        <div className="pagination">
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            ←
          </button>

          <span>
            {String(currentIndex / itemsPerPage + 1).padStart(2, "0")}
          </span>

          <button
            onClick={handleNext}
            disabled={currentIndex + itemsPerPage >= a.length}
          >
            →
          </button>
        </div>
      </div>

      <div className="product-grid">
        {visibleProducts.map((item) => (
          <Link
            to={"/list"}
            className="product-card"
            key={item._id || item.id}
          >

            <div className="product-image-container">

              {item.tag && (
                <span className="product-badge">
                  {item.tag}
                </span>
              )}

              <img src={item.image} alt={item.name} />

              <div className="card-arrow">
               <Link to={'/list'}>↗</Link>
              </div>

            </div>

            <div className="product-details">

              <div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>

              <span className="product-price">
                ₹{item.price}
              </span>

            </div>

          </Link>
        ))}
      </div>

    </section>

  </div>
);
};

export default ProductList;