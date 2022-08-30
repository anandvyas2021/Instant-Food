import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.css";

const Backdrop = (props) => {
    return <div className={styles["drawer-backdrop"]}></div>;
};

export default function FilterDrawer() {
    const portalElement = document.getElementById("drawer-modal");
    ReactDOM.createPortal(<Backdrop />, portalElement);
    return (
        <div className={styles["filter-drawer-container"]}>FilterDrawer</div>
    );
}
