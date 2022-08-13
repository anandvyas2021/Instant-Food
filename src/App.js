import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "Container/Header";
import Meals from "Components/Meals/Meals";
import Cart from "Cart/Cart";
import CartProvider from "store/CartProvider";

import Pages from "Pages";

const App = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const showCart = () => {
    setToggleModal(true);
  };
  const hideCart = () => {
    setToggleModal(false);
  };
  return (
    <CartProvider>
      <BrowserRouter>
        {toggleModal && <Cart onHideCart={hideCart} />}
        <Header onShowCart={showCart} />
        <Meals />
        <Pages />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
