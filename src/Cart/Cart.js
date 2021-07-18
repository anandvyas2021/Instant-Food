import React, { useState, useContext } from 'react';
import styles from './Cart.module.css';
import Modal from '../Components/UI/Modal';
import CartItems from './CartItems';
import CartContext from '../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = (event) => {
    event.preventDefault();
    setIsCheckOut(true);
  };

  const confirmSubmitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      'https://food-order-6bf1c-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
      }
    );
    setIsSubmitting(false);
    setIsSubmitted(true);
    cartCtx.clearCart();
  };

  const cartItem = (
    <ul className={styles['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItems
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={styles.actions}>
      <button className={styles['button--alt']} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItem}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckOut && (
        <Checkout
          onConfirm={confirmSubmitOrderHandler}
          onHideCart={props.onHideCart}
        />
      )}
      {!isCheckOut && modalActions}
    </React.Fragment>
  );

  const SubmittingForm = <p>Sending order data...</p>;

  const SubmittedForm = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={styles.actions}>
        <button className={styles.button} onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {!isSubmitting && !isSubmitted && cartModalContent}
      {isSubmitting && SubmittingForm}
      {isSubmitted && isSubmitted && SubmittedForm}
    </Modal>
  );
};
export default Cart;
