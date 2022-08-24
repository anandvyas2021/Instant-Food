import React from "react";
import styles from "./styles.module.css";
import MealsImg from "assets/meals.jpg";

import MealsSummary from "components/meals/MealsSummary";
import Carousel from "components/carousel";

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
    </React.Fragment>
  );
}
