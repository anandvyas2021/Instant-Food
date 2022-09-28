import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import logo from "assets/restaurant.png";
import downArrow from "assets/down.png";

import { NavLink } from "react-router-dom";
import HeaderCartButton from "components/BasicComponents/HeaderCartButton";
import { navList } from "utils/config";

const Header = (props) => {
    const changeItem = (e, link) => {
        let menuLinks = document.querySelectorAll("#nav-links");

        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].style.color = "#fff";
        }
        e.currentTarget.style.color = "#f18155";
    };

    useEffect(() => {
        // if (window.location.pathname.replace("/", "")) {
        //     let currentMenuItem = window.location.pathname.replace("/", "");
        //     document.querySelector(`.${currentMenuItem}`) &&
        //         (document.querySelector(`.${currentMenuItem}`).style.color =
        //             "#f18155");
        // }
    }, []);

    return (
        <header className={styles["header-main-container"]}>
            <div className={styles["header"]}>
                <div className={styles["logo-section"]}>
                    <NavLink to="/">
                        <img
                            className={styles["logo-img"]}
                            src={logo}
                            alt="logo"
                        />
                    </NavLink>
                    <h2>Instant Food</h2>
                </div>

                <div
                    className={styles["header-address-section"]}
                    onClick={props.toggleAddressDrawer}
                >
                    <span className={styles["header-address-type"]}>
                        {"Home"}
                    </span>
                    <span className={styles["header-address"]}>
                        {"Bengaluru, Karnataka 560035, India"}
                    </span>
                    <span className={styles["header-address-arrow"]}>
                        <img src={downArrow} alt="down" />
                    </span>
                </div>

                <div className={styles["header-right-section"]}>
                    <div className={styles["header-right-section-items"]}>
                        <HeaderCartButton
                            toggleCartModal={props.toggleCartModal}
                        />
                        <ul className={styles["nav-list"]}>
                            {navList.map((item) => (
                                <li
                                    key={item._id}
                                    id="nav-links"
                                    className={item.link.replace("/", "")}
                                    onClick={changeItem}
                                >
                                    <div className={styles["nav-list-item"]}>
                                        <NavLink
                                            className={styles["nav-links"]}
                                            to={item.link}
                                        >
                                            <span>
                                                <img
                                                    src={item.icon}
                                                    alt="icon"
                                                />
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
