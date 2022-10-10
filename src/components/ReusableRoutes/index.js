import React, { useEffect } from "react";
import styles from "./styles.module.scss";

// import { NavLink, useParams } from "react-router-dom";
import MenuDesc from "routes/Account/MenuDesc";
import Button from "components/BasicComponents/Button";

export default function ReusableRoutes(props) {
    const changeItem = (e, slug) => {
        let menuLinks = document.querySelectorAll("#menu-links");

        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].style.backgroundColor = "transparent";
        }

        const url = new URL(window.location);
        url.searchParams.set("", slug);
        window.history.pushState({}, "", url);
        e.currentTarget.style.backgroundColor = "#fff";
    };

    useEffect(() => {
        if (window.location.search) {
            let currentMenuItem = window.location.search.replace("?=", "");
            document.querySelector(`.${currentMenuItem}`) &&
                (document.querySelector(
                    `.${currentMenuItem}`
                ).style.backgroundColor = "#fff");
        }
    }, []);

    return (
        <div className={styles["reusable-main-container"]}>
            <div className={styles["reusable-inner-box"]}>
                <div
                    className={`${
                        styles["reusable-header-container"]
                    } ${"justify-content-center"}`}
                >
                    <div className={styles["reusable-header"]}>
                        <div className={styles["reusable-header-left"]}>
                            <div className={styles["reusable-header-heading"]}>
                                {props.heading}
                            </div>
                            <div className={styles["reusable-header-details"]}>
                                {props.headerDetails && props.headerDetails()}
                            </div>
                        </div>
                        <div className={styles["reusable-header-right-btn"]}>
                            {props.button && (
                                <Button label={props.buttonText} />
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles["reusable-body"]}>
                    <div
                        className={`${
                            styles["reusable-body-inner"]
                        } ${"justify-content-center"}`}
                    >
                        <div className={styles["reusable-body-content"]}>
                            <div className={styles["reusable-body-menu"]}>
                                <ul>
                                    {props.menuList &&
                                        props.menuList.map((item) => (
                                            <li
                                                key={item._id}
                                                id="menu-links"
                                                className={item.slug}
                                                onClick={(e) =>
                                                    changeItem(e, item.slug)
                                                }
                                            >
                                                {item.icon && (
                                                    <span
                                                        className={
                                                            styles[
                                                                "reusable-body-menu-img"
                                                            ]
                                                        }
                                                    >
                                                        <img
                                                            src={item.icon}
                                                            alt="icon"
                                                        />
                                                    </span>
                                                )}
                                                <span
                                                    className={
                                                        styles[
                                                            "reusable-body-menu-text"
                                                        ]
                                                    }
                                                >
                                                    {item.label}
                                                </span>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div className={styles["reusable-body-menu-desc"]}>
                                <MenuDesc />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
