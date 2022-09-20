import React from "react";
import styles from "./styles.module.scss";
import offerBanner from "assets/offers.webp";

import Tabs from "components/BasicComponents/Tabs";
import RestaurantCard from "custom/RestaurantCard";
import { offersTabpanes, restaurantData } from "utils/config";

export default function Offers() {
    const onClick = (e) => {
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
                        All offers (683)
                    </div>
                    <div className={styles["offers-body-desc"]}>
                        All offers and deals, from restaurants near you
                    </div>
                </div>
                <div className={styles["offers-body-content"]}>
                    {restaurantData.map((data, i) => (
                        <RestaurantCard ribbon={false} key={i} data={data} />
                    ))}
                </div>
            </div>
        </div>
    );
}
