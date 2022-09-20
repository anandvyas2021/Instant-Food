import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Cart from "assets/cart.png";

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
                <img src={Cart} />
                <span className={styles["header-cart-badge"]}>
                    {numberOfCartItems}
                </span>
            </span>
        </button>
    );
};
export default HeaderCartButton;
