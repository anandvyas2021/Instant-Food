import React from "react";
import styles from "./styles.module.scss";

export default function Button(props) {
    return (
        <div className={styles["custom-button-box"]}>
            <button onClick={props.onClick} disabled={props.disabled}>
                {props.label}
            </button>
        </div>
    );
}
