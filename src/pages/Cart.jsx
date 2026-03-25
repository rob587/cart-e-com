import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Cart = () => {
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
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              -
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
            <button onClick={() => removeFromCart(item.id)}>Rimuovi</button>
          </div>
        );
      })}

      <p>Totale: {total.toFixed(2)}$</p>
      <button onclick={clearCart}>Svuota Carrello</button>
    </>
  );
};

export default Cart;
