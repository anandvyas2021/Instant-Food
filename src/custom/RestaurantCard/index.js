import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import star from "assets/star.png";
import offer from "assets/NavIcons/offer.png";

import { Tag } from "antd";

export default function RestaurantCard(props) {
    const navigate = useNavigate();
    const [state, setState] = useState({ mouseHover: false });

    // useEffect(() => {
    //   let card = document.querySelector(".restaurant-card-box");
    //   console.log(card);
    //   console.log(state.mouseHover);
    //   // document.addEventListener('mouseover')

    //   return () => {};
    // }, [state.mouseHover]);

    const mouseOverCard = () => {
        setState({ mouseHover: true });
        let card = document.querySelector(".restaurant-card-box");
        console.log(card);
    };

    const mouseLeaveCard = () => {};

    const navigateToDetails = (id, path) => {
        console.log(id, path);
        navigate({
            pathname: "/restaurant/" + path,
            state: { restaId: id, details: data },
        });
    };

    // console.log(state.mouseHover);
    const { data } = props;
    console.log(data);

    return (
        <div
            className={styles["restaurant-card-box"]}
            onClick={() => navigateToDetails(data._id, data.name)}
        >
            {props.ribbon && (
                <div className={styles["restaurant-card-ribbon-wrapper"]}>
                    <span
                        className={styles["restaurant-card-ribbon"]}
                        style={data.ribbon_styles}
                    >
                        {data.ribbon}
                    </span>
                    <span className={styles["restaurant-card-ribbon-corner"]} />
                </div>
            )}

            {/* <Badge.Ribbon text={data.ribbon} style={data.ribbon_styles} /> */}
            <div
                className={styles["restaurant-card"]}
                // onMouseOver={() => mouseOverCard()}
                // onMouseLeave={() => mouseLeaveCard()}
            >
                <div className={styles["restaurant-card-image"]}>
                    <img
                        src={data.image}
                        alt="restaurant"
                        width="100%"
                        height="100%"
                    />
                </div>
                <div className={styles["restaurant-card-description"]}>
                    <h4
                        style={{
                            fontSize: "17px",
                            fontWeight: 500,
                            wordBreak: "break-word",
                        }}
                    >
                        {data.name}
                    </h4>
                    <div className={styles["restaurant-card-tags"]}>
                        {data.tags.map((tag, i) => {
                            return (
                                <Tag
                                    key={i}
                                    color={`#${Math.floor(
                                        Math.random() * 16777215
                                    ).toString(16)}`}
                                >
                                    {tag}
                                </Tag>
                            );
                        })}
                    </div>
                </div>
                <div className={styles["restaurant-card-details"]}>
                    <div
                        className={styles["details-rating"]}
                        style={{
                            backgroundColor:
                                Number(data.rating) > 4 ? "#48c479" : "#db7c38",
                        }}
                    >
                        <span className={styles["details-rating-star"]}>
                            <img
                                src={star}
                                alt="star"
                                width="100%"
                                height="100%"
                            />
                        </span>
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
                    <div className={styles["restaurant-card-offers"]}>
                        <span>
                            <img src={offer} alt="offer" />
                        </span>
                        <span>{`${data.offer ? data.offer : ""}${
                            data.coupon_code ? " | Use " + data.coupon_code : ""
                        }`}</span>
                    </div>
                )}

                <div className={styles["restaurant-card-footer"]}>
                    <span className={styles["restaurant-card-footer-text"]}>
                        {"QUICK VIEW"}
                    </span>
                </div>
            </div>
        </div>
    );
}
