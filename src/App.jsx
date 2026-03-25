//impostato routing tra le pagine

import { CartProvider } from "./context/CartContext";
import DefaultLayout from "./layout/DefaultLayout";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="carrello" element={<Cart />} />
          </Route>
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
