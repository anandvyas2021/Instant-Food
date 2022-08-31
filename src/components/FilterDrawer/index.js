import React from "react";
import styles from "./styles.module.css";

import ReactDOM from "react-dom";
import { Checkbox } from "antd";

const Backdrop = (props) => {
    return (
        <div
            className={styles["filter-drawer-backdrop"]}
            onClick={props.toggleFilterDrawer}
        />
    );
};

const DrawerOverlay = (props) => {
    return (
        <div className={styles["filter-drawer-overlay"]}>
            <Checkbox.Group>
                {props.filterRadioList.map((item) => (
                    <Checkbox />
                ))}
            </Checkbox.Group>
        </div>
    );
};

export default function FilterDrawer(props) {
    let radios = ["a", "b"];
    const portalElement = document.getElementById("filter-drawer-modal");
    return (
        <div>
            {ReactDOM.createPortal(
                <Backdrop toggleFilterDrawer={props.toggleFilterDrawer} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <DrawerOverlay
                    toggleFilterDrawer={props.toggleFilterDrawer}
                    // filterRadioList={props.filterRadioList}
                    filterRadioList={radios}
                />,
                portalElement
            )}
        </div>
    );
}
