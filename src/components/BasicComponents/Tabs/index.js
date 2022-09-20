import React, { useEffect } from "react";
import styles from "./styles.module.scss";

export default function Tabs(props) {
    const changeTabHandler = (e, slug) => {
        let tabLinks = document.querySelectorAll("#tab-links");

        for (let i = 0; i < tabLinks.length; i++) {
            tabLinks[i].style = {
                borderBottom: "3px solid transparent",
                color: "#93959f",
            };
        }

        const url = new URL(window.location);
        url.searchParams.set("", slug);
        window.history.pushState({}, "", url);

        e.currentTarget.style.borderBottom = "3px solid #000";
        e.currentTarget.style.color = "#282c3f";

        props.onClick(slug);
    };

    useEffect(() => {
        if (window.location.search) {
            let currentMenuItem = window.location.search.replace("?=", "");
            document.querySelector(`.${currentMenuItem}`) &&
                (document.querySelector(
                    `.${currentMenuItem}`
                ).style.borderBottom = "3px solid #000");
            // color: "#282c3f",

            // {borderBottom: "3px solid #000",
            // color: "#282c3f",}
        }
    }, []);

    return (
        <div className={styles["custom-tabs-container"]}>
            <div className={styles["custom-tabs-inner"]}>
                <div className={styles["custom-tabs"]}>
                    {props.options.map((item, i) => (
                        <div
                            key={item._id}
                            className={`${styles["custom-tabpanes"]} ${item.slug}`}
                            id="tab-links"
                            tabIndex={i}
                            onClick={(e) => changeTabHandler(e, item.slug)}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
