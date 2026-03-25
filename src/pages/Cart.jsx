import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Cart = () => {
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

  const { cart, removeFromCart, clearCart, updateQuantity } =
    useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <>
      {cart.length === 0 && <p>Carrello vuoto</p>}

      {cart.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt={item.name} width={80} />
            <p>{item.name}</p>
            <p>{item.price}€</p>
            <button
              onClick={() => {
                if (item.quantity === 1) handleRemove(item);
                else updateQuantity(item.id, item.quantity - 1);
              }}
            >
              -
            </button>
            <button onClick={() => handleRemove(item)}>Rimuovi</button>

            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
          </div>
        );
      })}

      <p>Totale: {total.toFixed(2)}$</p>
      <button onClick={clearCart}>Svuota Carrello</button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
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
    </>
  );
};

export default Cart;
