import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsClicked, setCartIsClicked] = useState(false);

  const showCartHandler = () => {
    setCartIsClicked(true);
  };

  const hideCartHandler = () => {
    setCartIsClicked(false);
  };

  return (
    <CartProvider>
      {cartIsClicked && <Cart onClose={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
