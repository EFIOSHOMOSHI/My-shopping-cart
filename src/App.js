import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => setCart([...cart, item]);
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      <Header />
      <Products />
      <CartSummary />
    </CartContext.Provider>
  );
}

function Header() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <h1>Shop Store</h1>
      <p>Items in cart: {cart.length}</p>
      <hr />
    </div>
  );
}

function Products() {
  const { addToCart } = useContext(CartContext);
  const items = [
    { id: 1, name: "Phone", price: 500 },
    { id: 2, name: "Laptop", price: 1000 },
    { id: 3, name: "Headphones", price: 100 },
  ];

  return (
    <div>
      <h2>Products</h2>
      {items.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - ${item.price}
          </p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

function CartSummary() {
  const { cart, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total items: {cart.length}</p>
      <p>Total price: ${total}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default App;