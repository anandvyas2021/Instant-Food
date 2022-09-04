import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.scss";

import closeBtn from "assets/close.png";

const Backdrop = (props) => {
  return (
    <div
      className={styles["address-drawer-backdrop"]}
      onClick={props.toggleAddressDrawer}
    />
  );
};

const DrawerOverlay = (props) => {
  const [state, setState] = useState({ searchedAddress: "" });

  const searchHandler = (e) => {
    console.log(e.target.value);
    setState({ searchedAddress: e.target.value });
  };
  const clearSearch = () => {
    setState({ searchedAddress: "" });
  };

  return (
    <div className={styles["address-drawer-overlay"]}>
      <div className={styles["address-drawer"]}>
        <div className={styles["address-drawer-upper-section"]}>
          <div className={styles["address-drawer-close"]}>
            <div className={styles["address-drawer-close-img-box"]}>
              <img src={closeBtn} alt="close" />
            </div>
          </div>
          <div className={styles["address-drawer-search"]}>
            <input
              type="text"
              placeholder="Search for area, street name.."
              onChange={(e) => searchHandler(e)}
              value={state.searchedAddress}
            />
            {state.searchedAddress.length > 0 && (
              <span
                className={styles["address-drawer-search-clear"]}
                onClick={clearSearch}
              >
                Cancel
              </span>
            )}
          </div>
        </div>
        <div className={styles["address-drawer-lower-section"]}>
          <div className={styles["address-drawer-gps"]}></div>
          <div className={styles["address-drawer-saved-address"]}></div>
        </div>
      </div>
    </div>
  );
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
        <DrawerOverlay
          toggleAddressDrawer={props.toggleAddressDrawer}
          searchHandler={props.searchHandler}
          clearSearch={props.clearSearch}
        />,
        portalElement
      )}
    </div>
  );
}
