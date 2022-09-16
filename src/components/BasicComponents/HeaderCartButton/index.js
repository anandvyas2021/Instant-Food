import { useContext, useEffect, useState } from "react";

import CartIcon from "cart/CartIcon";
import styles from "./styles.module.scss";
import CartContext from "store/cart-context";

const HeaderCartButton = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);
    const timer = setInterval(() => {
      setBtnHighlighted(false);
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.toggleCartModal}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles["header-cart-label"]} />
      <span className={styles["header-cart-badge"]}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
