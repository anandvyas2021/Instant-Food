import React from "react";
import styles from "./styles.module.scss";

import { supportMenu } from "utils/config";
import ReusableRoutes from "components/ReusableRoutes";

export default function Help() {
  const headerDetails = () => {
    return (
      <div className={styles["support-header-details"]}>
        <span>Let's take a step ahead and help you better.</span>
      </div>
    );
  };

  return (
    <ReusableRoutes
      heading="Help & Support"
      headerDetails={headerDetails}
      menuList={supportMenu}
    />
  );
}
