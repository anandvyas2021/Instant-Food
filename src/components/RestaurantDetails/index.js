import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import StarIcon from "assets/star.png";
import OfferIcon from "assets/NavIcons/offer.png";
import DownIcon from "assets/down.png";

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
                    <div
                        className={`${
                            styles["restaurant-details-breadcrumb"]
                        } ${"justify-content-center"}`}
                    >
                        <span>Home / Bangalore / Rainbow Drive / Wow!Momo</span>
                    </div>
                </div>

                <div className={styles["restaurant-details-about"]}>
                    <div
                        className={`${
                            styles["restaurant-details-about-inner"]
                        } ${"justify-content-center"}`}
                    >
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
                                {data.tags.map((tag, i) => (
                                    <React.Fragment key={i}>
                                        <span>{tag}</span>
                                        <span className={styles["tags-commas"]}>
                                            {/* {", "} */}
                                        </span>
                                    </React.Fragment>
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
                                <div
                                    className={
                                        styles[
                                            "restaurant-details-about-middle-address-first"
                                        ]
                                    }
                                >
                                    Change Outlet
                                </div>
                                <div
                                    className={
                                        styles[
                                            "restaurant-details-about-middle-address-arrow"
                                        ]
                                    }
                                >
                                    <img src={DownIcon} />
                                </div>
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
                                            <img
                                                src={StarIcon}
                                                width="13px"
                                                style={{ marginRight: "5px" }}
                                            />
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
                            <fieldset>
                                <legend>Offers</legend>
                                <div
                                    className={
                                        styles[
                                            "restaurant-details-about-right-offers"
                                        ]
                                    }
                                >
                                    {[
                                        "Flat ₹100 off on orders above ₹249 | Use code FLAT100",
                                        "50% off up to ₹100 | Use code TRYNEW",
                                    ].map((offer, i) => (
                                        <div
                                            key={i}
                                            className={
                                                styles[
                                                    "restaurant-details-about-right-offer"
                                                ]
                                            }
                                        >
                                            <div
                                                className={
                                                    styles[
                                                        "restaurant-details-about-right-offer-image"
                                                    ]
                                                }
                                            >
                                                <img src={OfferIcon} />
                                            </div>
                                            <div
                                                className={
                                                    styles[
                                                        "restaurant-details-about-right-offer-text"
                                                    ]
                                                }
                                            >
                                                {offer}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>

                <div className={styles["restaurant-details-body"]}></div>
            </div>
        </div>
    );
}
