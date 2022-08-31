import React from "react";
import styles from "./styles.module.css";
import logo from "assets/restaurant.png";

import { NavLink } from "react-router-dom";
import HeaderCartButton from "components/HeaderCartButton";
import { navList } from "config";

const Header = (props) => {
  return (
    <header header className={styles["header-main-container"]}>
      <div className={styles.header}>
        <div className={styles["logo-section"]}>
          <NavLink to="/">
            <img className={styles["logo-img"]} src={logo} alt="logo" />
          </NavLink>

          <h2>Instant Food</h2>
        </div>

        <div className={styles["header-right-section"]}>
          <div className={styles["header-right-section-items"]}>
            <HeaderCartButton toggleCartModal={props.toggleCartModal} />
            <ul className={styles["nav-list"]}>
              {navList.map((item) => (
                <li key={item._id}>
                  <div className={styles["nav-list-item"]}>
                    <NavLink className={styles["nav-links"]} to={item.link}>
                      <span>
                        <img src={item.icon} alt="icon" />
                      </span>
                      <span>{item.label}</span>
                    </NavLink>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
