
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

function App() {

  function handleUpdateQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    handleRemoveFromCart(productId);
    return;
  }

  setCartItems((currentItems) =>
    currentItems.map((item) =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    )
  );
}

function handleRemoveFromCart(productId) {
  setCartItems((currentItems) =>
    currentItems.filter((item) => item.id !== productId)
  );
}
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(product, quantity) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...currentItems, { ...product, quantity }];
    });
  }

  return (
    <BrowserRouter>
      <Navbar cartItems={cartItems}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems}
             onUpdateQuantity={handleUpdateQuantity}
      onRemove={handleRemoveFromCart}
            />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
