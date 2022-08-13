import { Fragment } from "react";
import MealsImg from "assets/meals.jpg";
import logo from "assets/restaurant.png";

import HeaderCartButton from "Components/CartButton";
import { navList } from "config";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles["logo-section"]}>
          <img className={styles["logo-img"]} src={logo} />
          <h2>Instant Food</h2>
        </div>

        <div className={styles["header-right-section"]}>
          <ul className={styles["nav-list"]}>
            {navList.map(
              (item) => (
                console.log(item),
                (
                  <li key={item._id}>
                    <div className={styles["nav-list-item"]}>
                      <NavLink className={styles["nav-links"]} to={item.link}>
                        <span>
                          <img src={item.icon} />
                        </span>
                        <span>{item.label}</span>
                      </NavLink>
                    </div>
                  </li>
                )
              )
            )}
          </ul>

          <HeaderCartButton onShowCart={props.onShowCart} />
        </div>
      </header>

      <div className={styles["main-image-section"]}>
        <img src={MealsImg} alt="Dishes on the table" />
      </div>
    </Fragment>
  );
};
export default Header;
