import React from "react";
import styles from "./styles.module.scss";

export default function Button(props) {
  return (
    <div className={styles["custom-button-box"]}>
      <button>{props.label}</button>
    </div>
  );
}
