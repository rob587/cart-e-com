import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../products.json";

const Homepage = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <div className="container py-5">
        <h2 className="fw-bold mb-4">🏪 Prodotti</h2>
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-6 col-md-4 col-lg-3" key={product.id}>
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-light text-dark mb-2 align-self-start">
                    {product.category}
                  </span>
                  <h6 className="card-title fw-bold">{product.name}</h6>
                  <p className="text-muted mt-auto mb-2">{product.price}€</p>
                  <button
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(product)}
                  >
                    Aggiungi al carrello
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
