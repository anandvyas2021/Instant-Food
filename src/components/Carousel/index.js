import React from "react";
import styles from "./styles.module.css";

import { Link } from "react-router-dom";
import { carouselList } from "config";

export default function Carousel() {
  return (
    <div className={styles["carousel-wrapper"]}>
      <div className={styles["carousel"]}>
        {carouselList.map((item) => (
          <Link
            to={item.slug}
            key={item._id}
            className={styles["carousel-image-box"]}
          >
            <img
              src={item.image}
              alt="carousel"
              className={styles["carousel-image"]}
            />
          </Link>
        ))}
        <div className={styles["carousel-prev-btn carousel-btn"]}>&#8249;</div>
        <div className={styles["carousel-next-btn carousel-btn"]}>&#8250;</div>
      </div>
    </div>
  );
}
