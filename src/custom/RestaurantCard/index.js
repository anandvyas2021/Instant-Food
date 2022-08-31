import React from "react";
import styles from "./styles.module.css";
import offer from "assets/NavIcons/offer.png";

import { Tag } from "antd";

export default function RestaurantCard(props) {
  const { data } = props;
  console.log(data);
  return (
    <div className={styles["restro-card-box"]}>
      {/* <span className={styles["restro-card-ribbon"]} style={data.ribbon_styles}>
        {data.ribbon}
      </span> */}
      <div className={styles["restro-card"]}>
        <div className={styles["restro-card-image"]}>
          <img src={data.image} alt="restro" width="100%" height="100%" />
        </div>
        <div className={styles["restro-card-description"]}>
          <h4>{data.name}</h4>
          <div>
            {data.tags.map((tag) => (
              <Tag color="yellow">{tag}</Tag>
            ))}
          </div>
        </div>
        <div className={styles["restro-card-details"]}>
          <div
            className={styles["details-rating"]}
            style={{
              backgroundColor: Number(data.rating) > 4 ? "#48c479" : "#db7c38",
            }}
          >
            <span className={styles["details-rating-star"]} />
            <span>{data.rating}</span>
          </div>
          <div>{"•"}</div>
          <div>
            <span>{data.delivery_time}</span>
          </div>
          <div>{"•"}</div>
          <div>{data.cost}</div>
        </div>
        {data.offer_available && (
          <div className={styles["restro-card-offers"]}>
            <span>
              <img src={offer} alt="offer" />
            </span>
            <span>{`${data.offer ? data.offer : ""}${
              data.coupon_code ? " | " + "Use " + data.coupon_code : ""
            }`}</span>
          </div>
        )}
      </div>
    </div>
  );
}
