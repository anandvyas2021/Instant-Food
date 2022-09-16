import React, { useEffect } from "react";
import { profileMenu } from "utils/config";
import { NavLink, useParams } from "react-router-dom";
import MenuDesc from "./MenuDesc/index";
import styles from "./styles.module.scss";
import Button from "components/BasicComponents/Button";

export default function Account() {
  const changeItem = (e, link) => {
    let menuLinks = document.querySelectorAll("#menu-links");

    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].style.backgroundColor = "transparent";
    }

    const url = new URL(window.location);
    url.searchParams.set("", link);
    window.history.pushState({}, "", url);
    e.currentTarget.style.backgroundColor = "#fff";
  };

  useEffect(() => {
    if (window.location.search) {
      let currentMenuItem = window.location.search.replace("?=%2F", "");
      document.querySelector(`.${currentMenuItem}`).style.backgroundColor =
        "#fff";
    }
  }, []);

  return (
    <div className={styles["account-main-container"]}>
      <div className={styles["account-inner-box"]}>
        <div className={styles["account-header-container"]}>
          <div className={styles["account-header"]}>
            <div className={styles["account-header-left"]}>
              <div className={styles["account-header-heading"]}>Anand Vyas</div>
              <div className={styles["account-header-details"]}>
                <span>7888478435</span>
                <span>.</span>
                <span>anandvyas1290@gmail.com</span>
              </div>
            </div>
            <div className={styles["account-header-right-btn"]}>
              <Button label="Edit Profile" />
            </div>
          </div>
        </div>

        <div className={styles["account-body"]}>
          <div className={styles["account-body-inner"]}>
            <div className={styles["account-body-content"]}>
              <div className={styles["account-body-menu"]}>
                <ul>
                  {profileMenu.map((item) => (
                    <li
                      key={item._id}
                      id="menu-links"
                      className={item.link.replace("/", "")}
                      onClick={(e) => changeItem(e, item.link)}
                    >
                      <span className={styles["account-body-menu-img"]}>
                        <img src={item.icon} />
                      </span>
                      <span className={styles["account-body-menu-text"]}>
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles["account-body-menu-desc"]}>
                <MenuDesc />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
