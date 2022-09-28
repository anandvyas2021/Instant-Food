import React, { useState } from "react";
import styles from "./styles.module.scss";
import offerBanner from "assets/offers.webp";

import Tabs from "components/BasicComponents/Tabs";
import RestaurantOffers from "./Components/RestaurantOffers";
import CouponOffers from "./Components/CouponOffers";

import { offersTabpanes, restaurantData, couponsData } from "utils/config";

export default function Offers() {
    const [offer, setOffer] = useState(
        window.location.search.replace("?=", "")
    );
    const onClick = (e) => {
        setOffer(e);
        console.log(e);
    };

    return (
        <div className={styles["offers-page"]}>
            <div className={styles["offers-banner-container"]}>
                <div className={styles["offers-banner"]}>
                    <div className={styles["offers-banner-inner"]}>
                        <div className={styles["offers-banner-label"]}>
                            <div className={styles["offers-banner-heading"]}>
                                Offers for you
                            </div>
                            <div className={styles["offers-banner-desc"]}>
                                Explore top deals and offers exclusively for
                                you!
                            </div>
                        </div>
                        <div className={styles["offers-banner-image"]}>
                            <img src={offerBanner} alt="banner" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["offers-tabs-container"]}>
                <Tabs options={offersTabpanes} onClick={onClick} />
            </div>

            <div className={styles["offers-body-container"]}>
                <div className={styles["offers-body-header"]}>
                    <div className={styles["offers-body-heading"]}>
                        {offer === "restaurant"
                            ? `All offers (${restaurantData.length})`
                            : "Available Coupons"}
                    </div>
                    <div className={styles["offers-body-desc"]}>
                        {offer === "restaurant" &&
                            "All offers and deals, from restaurants near you"}
                    </div>
                </div>
                <div className={styles[`${offer}-offers-body-content`]}>
                    {offer === "restaurant" ? (
                        <RestaurantOffers restaurantData={restaurantData} />
                    ) : (
                        <CouponOffers couponsData={couponsData} />
                    )}
                </div>
            </div>
        </div>
    );
}
