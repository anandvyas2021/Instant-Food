import React from "react";
import styles from "./styles.module.scss";

import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className={styles["address-drawer-backdrop"]}
      onClick={props.toggleAddressDrawer}
    />
  );
};

const DrawerOverlay = (props) => {
  return <div className={styles["address-drawer-overlay"]}></div>;
};

export default function AddressDrawer(props) {
  const portalElement = document.getElementById("address-drawer");
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop toggleAddressDrawer={props.toggleAddressDrawer} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <DrawerOverlay toggleAddressDrawer={props.toggleAddressDrawer} />,
        portalElement
      )}
    </div>
  );
}
