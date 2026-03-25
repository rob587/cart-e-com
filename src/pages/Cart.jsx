import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } =
    useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const handleRemove = (item) => {
    setItemToRemove(item);
    setShowModal(true);
  };

  const confirmRemove = () => {
    removeFromCart(itemToRemove.id);
    setShowModal(false);
    setItemToRemove(null);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <>
      <div className="container py-5" style={{ maxWidth: "800px" }}>
        <h2 className="fw-bold mb-4">🛒 Il tuo carrello</h2>

        {cart.length === 0 ? (
          <div className="text-center py-5 text-muted">
            <p className="fs-4">Il carrello è vuoto</p>
            <p>Aggiungi qualche prodotto dalla homepage!</p>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center gap-3 p-3 mb-3 border rounded-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <div className="flex-grow-1">
                  <h6 className="mb-1 fw-bold">{item.name}</h6>
                  <p className="mb-0 text-muted">{item.price}€</p>
                </div>

                {/* Controlli quantità */}
                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => {
                      if (item.quantity === 1) handleRemove(item);
                      else updateQuantity(item.id, item.quantity - 1);
                    }}
                  >
                    -
                  </button>
                  <span className="fw-bold px-2">{item.quantity}</span>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <p
                  className="mb-0 fw-bold"
                  style={{ minWidth: "80px", textAlign: "right" }}
                >
                  {(item.price * item.quantity).toFixed(2)}€
                </p>

                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleRemove(item)}
                >
                  🗑️
                </button>
              </div>
            ))}

            {/* Totale e svuota */}
            <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
              <button className="btn btn-outline-secondary" onClick={clearCart}>
                Svuota carrello
              </button>
              <h5 className="mb-0 fw-bold">Totale: {total.toFixed(2)}€</h5>
            </div>
          </>
        )}

        {/* Modale */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Conferma rimozione</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Sei sicuro di voler rimuovere <strong>{itemToRemove?.name}</strong>{" "}
            dal carrello?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Annulla
            </Button>
            <Button variant="danger" onClick={confirmRemove}>
              Rimuovi
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Cart;
