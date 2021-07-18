import { useState } from 'react';
import Header from './Components/Layouts/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Cart/Cart';
import CartProvider from './store/CartProvider';
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
      {toggleModal && <Cart onHideCart={hideCart} />}
      <Header onShowCart={showCart} />
      <Meals />
    </CartProvider>
  );
};

export default App;
