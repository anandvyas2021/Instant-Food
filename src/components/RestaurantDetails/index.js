import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import star from "assets/star.png";

import { restaurantData } from "utils/config";

export default function RestaurantDetails(props) {
    const location = useLocation();
    console.log(location.state);
    console.log(props);

    const data = restaurantData[0];
    console.log(data);

    return (
        <div className={styles["restaurant-details-page"]}>
            <div className={styles["restaurant-details-main"]}>
                <div className={styles["restaurant-details-header"]}>
                    <div className={styles["restaurant-details-breadcrumb"]}>
                        <span>Home / Bangalore / Rainbow Drive / Wow!Momo</span>
                    </div>
                </div>

                <div className={styles["restaurant-details-about"]}>
                    <div className={styles["restaurant-details-about-inner"]}>
                        <div
                            className={styles["restaurant-details-about-left"]}
                        >
                            <img src={data.image} />
                        </div>
                        <div
                            className={
                                styles["restaurant-details-about-middle"]
                            }
                        >
                            <div
                                className={
                                    styles[
                                        "restaurant-details-about-middle-title"
                                    ]
                                }
                            >
                                {data.name}
                            </div>
                            <div
                                className={
                                    styles[
                                        "restaurant-details-about-middle-tags"
                                    ]
                                }
                            >
                                {data.tags.map((tag) => (
                                    <span>
                                        {tag}
                                        {", "}
                                    </span>
                                ))}
                            </div>
                            <div
                                className={
                                    styles[
                                        "restaurant-details-about-middle-address"
                                    ]
                                }
                            >
                                VARTHUR HOBLI, Rainbow Drive |
                                <span
                                    className={
                                        styles[
                                            "restaurant-details-about-middle-address-first"
                                        ]
                                    }
                                >
                                    Change Outlet
                                </span>
                                <span
                                    className={
                                        styles[
                                            "restaurant-details-about-middle-address-arrow"
                                        ]
                                    }
                                >
                                    {">"}
                                </span>
                            </div>
                            <div
                                className={
                                    styles[
                                        "restaurant-details-about-middle-extras"
                                    ]
                                }
                            >
                                <div className={styles["middle-extra"]}>
                                    <div
                                        className={styles["middle-extra-value"]}
                                    >
                                        <span>
                                            <img src={star} width="13px" />
                                        </span>
                                        {data.rating}
                                    </div>
                                    <div
                                        className={styles["middle-extra-text"]}
                                    >
                                        500+ Ratings
                                    </div>
                                </div>
                                <div className={styles["middle-extra"]}>
                                    <div
                                        className={styles["middle-extra-value"]}
                                    >
                                        {data.delivery_time}
                                    </div>
                                    <div
                                        className={styles["middle-extra-text"]}
                                    >
                                        Delivery Time
                                    </div>
                                </div>
                                <div className={styles["middle-extra"]}>
                                    <div
                                        className={styles["middle-extra-value"]}
                                    >
                                        {data.cost}
                                    </div>
                                    <div
                                        className={styles["middle-extra-text"]}
                                    >
                                        {data.cost}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={styles["restaurant-details-about-right"]}
                        >
                            sdd
                        </div>
                    </div>
                </div>

                <div className={styles["restaurant-details-body"]}></div>
            </div>
        </div>
    );
}
