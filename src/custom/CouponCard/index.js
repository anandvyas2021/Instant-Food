import React, { useState } from "react";
import Button from "components/BasicComponents/Button";
import styles from "./styles.module.scss";

export default function CouponCard(props) {
    const [state, setState] = useState({
        btnLabel: "COPY CODE",
        btnState: true,
    });
    const { data } = props;

    const copyHandler = () => {
        setState({ btnLabel: "COPIED", btnState: false });
        console.log("object");
    };
    return (
        <div className={styles["coupon-card-box"]}>
            <div className={styles["coupon-card"]}>
                <div className={styles["coupon-card-header"]}>
                    <div className={styles["coupon-card-sticker"]}>
                        <img src={data.image} />
                        <span className="coupon-card-sticker-code">
                            {data.code}
                            <span className="coupon-card-sticker-cut-up"></span>
                            <span className="coupon-card-sticker-cut-down"></span>
                        </span>
                    </div>
                </div>
                <div className={styles["coupon-card-body"]}>
                    <div className={styles["coupon-card-body-title"]}>
                        {data.title}
                    </div>
                    <div className={styles["coupon-card-body-desc"]}>
                        {data.desc}
                    </div>
                    <div className={styles["coupon-card-body-extra"]}>
                        + MORE
                    </div>
                </div>
                <div className={styles["coupon-card-footer"]}>
                    <Button
                        label={state.btnLabel}
                        onClick={() => {
                            return state.btnState && copyHandler();
                        }}
                        disabled={!state.btnState}
                    />
                </div>
            </div>
        </div>
    );
}
