import React, { useRef, useState, useEffect, useCallback } from "react";
import styles from "./styles.module.css";
import MealsImg from "assets/meals.jpg";
import FilterImg from "assets/filter.png";
import search from "assets/NavIcons/search.png";

import { NavLink } from "react-router-dom";
import { filterOptions, restaurantData } from "config";
import RestaurantCard from "custom/RestaurantCard";

const MealsSummary = React.lazy(() => import("components/Meals/MealsSummary"));
const Carousel = React.lazy(() => import("components/Carousel"));

export default function Home(props) {
  const [state, setState] = useState({ filterStuck: false });

  const ref = useRef(null);
  const handleScroll = useCallback(() => {
    console.log(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      // console.log(window.scrollY, ref.current);

      if (window.scrollY > 1100) {
        ref.current.classList.add(styles["scrollStyles"]);
        setState({ filterStuck: true });
      }
      console.log(state.filterStuck);
      if (state.filterStuck) {
        ref.current.classList.add(styles["normalNav"]);
        setState({ filterStuck: false });
      }
      // else {
      // }
    });
  }, []);

  const decorateListItems = (className) => {
    const allListItems = document.querySelectorAll(".item");
    const listItem = document.querySelector(`.${className}`);
    // listItem.classList.add(styles.custom);
    console.log(allListItems);
    for (let i = 0; i <= allListItems.length; i++) {
      console.log(allListItems[i]);
      allListItems[i].classList.add(styles.none);
      // allListItems[i].classList.remove(styles.none);
    }
    listItem.classList.add(styles.custom);
  };

  return (
    <React.Fragment>
      <div className={styles["main-image-section"]}>
        <img src={MealsImg} alt="Dishes on the table" />
      </div>
      <MealsSummary />
      <div className={styles["home-body"]}>
        <div className={styles["home-carousel-container"]}>
          <Carousel />
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
                      <NavLink className={styles["nav-links"]} to={"/search"}>
                        <span>
                          <img src={search} alt="icon" />
                        </span>
                        <span style={{ fontSize: "18px" }}>{"Search"}</span>
                      </NavLink>
                    </div>
                  </li>
                )}
                {filterOptions.map((option) => (
                  <li
                    key={option._id}
                    className={(styles["item"], styles[option.className])}
                    onClick={() => decorateListItems(option.className)}
                  >
                    {option.label}
                  </li>
                ))}
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
            <RestaurantCard key={i} data={data} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
