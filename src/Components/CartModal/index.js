import ReactDOM from "react-dom";
import styles from "./styles.module.css";

const Backdrop = (props) => {
    return (
        <div
            className={styles["cart-backdrop"]}
            onClick={props.toggleCartModal}
        />
    );
};

const ModalOverlay = (props) => {
    return <div className={styles["cart-modal"]}>{props.children}</div>;
};
const CartModal = (props) => {
    const portalElement = document.getElementById("cart-modal");
    return (
        <div>
            {ReactDOM.createPortal(
                <Backdrop toggleCartModal={props.toggleCartModal} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </div>
    );
};
export default CartModal;
