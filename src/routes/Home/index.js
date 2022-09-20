import React, { useRef, useState, useEffect, useCallback } from "react";
import styles from "./styles.module.scss";
import MealsImg from "assets/meals.jpg";
import FilterImg from "assets/filter.png";
import search from "assets/NavIcons/search.png";

import { NavLink } from "react-router-dom";
import { filterOptions, restaurantData } from "utils/config";
import RestaurantCard from "custom/RestaurantCard";
import Tabs from "components/BasicComponents/Tabs";
import Slick from "custom/Slick";

const MealsSummary = React.lazy(() => import("components/Meals/MealsSummary"));
const Carousel = React.lazy(() => import("custom/Carousel"));

export default function Home(props) {
    const [state, setState] = useState({ filterStuck: false });

    const ref = useRef(null);
    const handleScroll = useCallback(() => {
        // console.log(window.scrollY);
    }, []);

    // useEffect(() => {
    //   window.addEventListener("scroll", (e) => {
    //     // console.log(window.scrollY, ref.current);

    //     if (window.scrollY > 1100) {
    //       ref.current.classList.add(styles["scrollStyles"]);
    //       setState({ filterStuck: true });
    //     }
    //     console.log(state.filterStuck);
    //     if (state.filterStuck) {
    //       ref.current.classList.add(styles["normalNav"]);
    //       setState({ filterStuck: false });
    //     }
    //     // else {
    //     // }
    //   });
    // }, []);

    const onClick = (e) => {
        console.log(e);
    };

    return (
        <div className={styles["body-main-container"]}>
            <div className={styles["main-image-section"]}>
                <img src={MealsImg} alt="Dishes on the table" />
            </div>
            <MealsSummary />
            <div className={styles["home-body"]}>
                <div className={styles["home-carousel-container"]}>
                    <Slick />
                </div>

                <div
                    className={styles["home-filter-bar-container"]}
                    ref={ref}
                    onScroll={handleScroll}
                >
                    <div className={styles["home-filter-bar"]}>
                        <div className={styles["home-filter-heading"]}>
                            {`${restaurantData.length} Restaurants`}
                        </div>
                        <div className={styles["home-filter-options"]}>
                            <ul className="allListItems">
                                {state.filterStuck && (
                                    <li>
                                        <div className="nav-list-item">
                                            <NavLink
                                                className={styles["nav-links"]}
                                                to={"/search"}
                                            >
                                                <span>
                                                    <img
                                                        src={search}
                                                        alt="icon"
                                                    />
                                                </span>
                                                <span
                                                    style={{ fontSize: "18px" }}
                                                >
                                                    {"Search"}
                                                </span>
                                            </NavLink>
                                        </div>
                                    </li>
                                )}

                                <Tabs
                                    options={filterOptions}
                                    onClick={onClick}
                                />
                            </ul>
                            <div
                                className={styles["home-filter-drawer-toggler"]}
                                onClick={props.toggleFilterDrawer}
                            >
                                <span>Filters</span>
                                <span>
                                    <img src={FilterImg} alt="filter" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles["home-restaurant-list-container"]}>
                    {restaurantData.map((data, i) => (
                        <RestaurantCard ribbon key={i} data={data} />
                    ))}
                </div>
            </div>
        </div>
    );
}
