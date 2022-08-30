import React from "react";
import styles from "./styles.module.css";
import MealsImg from "assets/meals.jpg";

const MealsSummary = React.lazy(() => import("components/Meals/MealsSummary"));
const Carousel = React.lazy(() => import("components/Carousel"));
const FilterDrawer = React.lazy(() => import("components/FilterDrawer"));

export default function Home() {
  return (
    <React.Fragment>
      <div className={styles["main-image-section"]}>
        <img src={MealsImg} alt="Dishes on the table" />
      </div>

      <MealsSummary />
      <div className={styles["home-carousel-container"]}>
        <Carousel />
      </div>
      {/* <div className={styles['']}></div> */}
      {/* <FilterDrawer /> */}

      <div className={styles["home-filter-bar-container"]}>
        <div className={styles["home-filter-bar"]}></div>
      </div>
    </React.Fragment>
  );
}
