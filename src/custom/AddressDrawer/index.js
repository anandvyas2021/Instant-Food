import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.scss";

import closeBtn from "assets/AddressDrawer/close.png";
import gpsIcon from "assets/AddressDrawer/gps.png";

import Input from "components/BasicComponents/Input";
import { savedAddresses } from "utils/config";

const Backdrop = (props) => {
  return (
    <div
      className={styles["address-drawer-backdrop"]}
      onClick={props.toggleAddressDrawer}
    />
  );
};

const DrawerOverlay = (props) => {
  const [state, setState] = useState({
    searchedAddress: "",
    gpsSelector: false,
  });

  const searchHandler = (value) => {
    setState({ searchedAddress: value });
  };
  const clearSearch = () => {
    setState({ searchedAddress: "" });
  };

  return (
    <div className={styles["address-drawer-overlay"]}>
      <div className={styles["address-drawer"]}>
        <div className={styles["address-drawer-upper-section"]}>
          <div className={styles["address-drawer-close"]}>
            <div
              className={styles["address-drawer-close-img-box"]}
              onClick={props.toggleAddressDrawer}
            >
              <img src={closeBtn} alt="close" />
            </div>
          </div>
          <div className={styles["address-drawer-search-box"]}>
            <Input
              type="text"
              placeholder="Search for area, street name.."
              onChange={searchHandler}
              value={state.searchedAddress}
              clearType="text"
            />
          </div>
        </div>
        <div className={styles["address-drawer-lower-section"]}>
          <div className={styles["address-drawer-gps-container"]}>
            <div className={styles["address-drawer-gps-icon"]}>
              <span className={styles["gps-icon"]}>
                <img src={gpsIcon} alt="gps" />
              </span>
            </div>
            <div className={styles["address-drawer-gps-text"]}>
              <div className={styles["address-drawer-gps-heading"]}>
                Get current location Using GPS
              </div>
              <div className={styles["address-drawer-gps-para"]}>Using GPS</div>
            </div>
          </div>
          <div className={styles["address-drawer-saved-address-container"]}>
            <p>SAVED ADDRESSES</p>
            <div className={styles["address-drawer-saved-addresses"]}>
              {savedAddresses.map((item) => (
                <div className={styles["address-drawer-saved-address"]}>
                  <div className={styles["address-drawer-saved-address-icon"]}>
                    <span className={styles["saved-address-icon"]}>
                      <img src={item.icon} alt="address" />
                    </span>
                  </div>
                  <div className={styles["address-drawer-saved-address-text"]}>
                    <div
                      className={styles["address-drawer-saved-address-type"]}
                    >
                      {item.type}
                    </div>
                    <div
                      className={styles["address-drawer-saved-address-main"]}
                    >
                      {item.address}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
