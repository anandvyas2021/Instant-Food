import React, { useEffect } from "react";
import styles from "./styles.module.css";
import MealsImg from "assets/meals.jpg";
import FilterImg from "assets/filter.png";

import { filterOptions, restaurantData } from "config";
import RestaurantCard from "custom/RestaurantCard";

const MealsSummary = React.lazy(() => import("components/Meals/MealsSummary"));
const Carousel = React.lazy(() => import("components/Carousel"));

export default function Home(props) {
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

  // useEffect(() => {
  //   let ele = document.querySelector(".home-filter-bar-container");
  //  window.onscroll=()=>{if(document.body.scrollTop>=200){
  //   ele.classList.add
  //  }}

  //   return () => {};
  // }, []);

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
        {/* <div className={styles['']}></div> */}
        {/* <FilterDrawer /> */}

        <div className={styles["home-filter-bar-container"]}>
          <div className={styles["home-filter-bar"]}>
            <div className={styles["home-filter-heading"]}>
              {"100 Restaurants"}
            </div>
            <div className={styles["home-filter-options"]}>
              <ul className="allListItems">
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
          {restaurantData.map((data) => (
            <RestaurantCard data={data} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
