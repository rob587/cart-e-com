import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../products.json";

const Homepage = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <div className="container py-5">
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-6 col-md-4 col-lg-3" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p>{product.price}€</p>
                  <button onClick={() => addToCart(product)}>
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
