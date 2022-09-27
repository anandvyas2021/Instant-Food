import React from "react";
import RestaurantCard from "custom/RestaurantCard";

export default function RestaurantOffers(props) {
    return (
        <>
            {props.restaurantData.map((data, i) => (
                <RestaurantCard ribbon={false} key={i} data={data} />
            ))}
        </>
    );
}
