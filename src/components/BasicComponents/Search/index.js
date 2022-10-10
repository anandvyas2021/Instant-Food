import React from "react";
import styles from "./styles.module.scss";
import CloseIcon from "assets/AddressDrawer/close.png";

export default function Search(props) {
    const clearSearch = () => {
        props.onChange("");
    };
    return (
        <div className={styles["custom-search-box"]}>
            <input
                type="search"
                placeholder={props.placeholder}
                onChange={(e) => props.onChange(e.target.value)}
                value={props.value}
            />
            {props?.value?.length > 0 &&
                (props.clearType === "text" ? (
                    <span
                        className={styles["custom-search-clear-text"]}
                        onClick={clearSearch}
                    >
                        Clear
                    </span>
                ) : (
                    <span
                        className={styles["custom-search-clear-icon"]}
                        onClick={clearSearch}
                    >
                        <img src={CloseIcon} alt="close" />
                    </span>
                ))}
            {props.children}
        </div>
    );
}
