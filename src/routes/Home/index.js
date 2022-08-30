import React from "react";
import styles from "./styles.module.css";
import MealsImg from "assets/meals.jpg";

import MealsSummary from "components/meals/Meals";
// import Carousel from "components/slick";
import Carousel from "components/carousel";
import Slick from "components/slick";

export default function Home() {
  return (
    <React.Fragment>
      <div className={styles["main-image-section"]}>
        <img src={MealsImg} alt="Dishes on the table" />
      </div>

      <MealsSummary />
      <div className={styles["home-carousel-container"]}>
        {/* <Carousel /> */}
        <Slick />
        <div className={styles["home-carousel"]}></div>
      </div>
    </React.Fragment>
  );
}
