import React from "react";
import CouponCard from "custom/CouponCard";

export default function CouponOffers(props) {
    return (
        <>
            {props.couponsData.map((data, i) => (
                <CouponCard key={i} data={data} />
            ))}
        </>
    );
}
