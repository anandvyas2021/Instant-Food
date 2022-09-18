import React from "react";
import styles from "./styles.module.scss";

import { profileMenu } from "utils/config";
import ReusableRoutes from "components/ReusableRoutes";

export default function Account() {
  const headerDetails = () => {
    return (
      <div className={styles["account-header-details"]}>
        <span>7888478435</span>
        <span>.</span>
        <span>anandvyas1290@gmail.com</span>
      </div>
    );
  };

  return (
    <ReusableRoutes
      heading="Anand Vyas"
      headerDetails={headerDetails}
      menuList={profileMenu}
      button
      buttonText="edit profile"
    />
  );
}
