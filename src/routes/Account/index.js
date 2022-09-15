import { profileMenu } from "config";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import MenuDesc from "./MenuDesc/index";
import styles from "./styles.module.scss";

export default function Account() {
    console.log(window.location);
    const changeItem = (link) => {
        console.log(link);

        const url = new URL(window.location);
        url.searchParams.set("", link);
        window.history.pushState({}, "", url);

        // window.history.pushState(window.location.pathname, "", link);
    };

    return (
        <div className={styles["account-main-container"]}>
            <div className={styles["account-inner-box"]}>
                <div className={styles["account-header-box"]}>
                    <div className={styles["account-header"]}>
                        <div className={styles["account-header-heading"]}>
                            Anand Vyas
                        </div>
                        <div className={styles["account-header-details"]}>
                            <span>7888478435</span>
                            <span>anandvyas1290@gmail.com</span>
                        </div>
                        <div className={styles["account-header-btn"]}>
                            Edit Profile
                        </div>
                    </div>
                </div>

                <div className={styles["account-body"]}>
                    <div className={styles["account-body-inner"]}>
                        <div className={styles["account-body-content"]}>
                            <div className={styles["account-body-menu"]}>
                                <ul>
                                    {profileMenu.map((item) => (
                                        <li key={item._id}>
                                            <span
                                                className={
                                                    styles[
                                                        "account-body-menu-img"
                                                    ]
                                                }
                                            >
                                                <img src={item.icon} />
                                            </span>
                                            <span
                                                className={
                                                    styles[
                                                        "account-body-menu-text"
                                                    ]
                                                }
                                                onClick={() =>
                                                    changeItem(item.link)
                                                }
                                            >
                                                {item.label}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles["account-body-menu-desc"]}>
                                <MenuDesc />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
