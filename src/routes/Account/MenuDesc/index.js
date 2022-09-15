import React from "react";
import styles from "../styles.module.scss";

export default function MenuDesc(props) {
    return (
        <>
            <div className={styles["account-menu-desc-header"]}>
                <h3>MenuDesc</h3>
            </div>
            <div className={styles["account-menu-desc-body"]}></div>
        </>
    );
}
