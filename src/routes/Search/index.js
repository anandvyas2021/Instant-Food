import React, { useState } from "react";
import styles from "./styles.module.scss";
import SearchIcon from "assets/NavIcons/search.png";
import Pizza from "assets/SearchImg/pizzas.jpg";
import Burger from "assets/SearchImg/burgers.jpg";

import Input from "components/BasicComponents/Input";

export default function Search(props) {
  const [state, setState] = useState({ searchedText: "" });

  const searchHandler = (value) => {
    setState({ searchedText: value });
  };

  return (
    <div className={styles["search-outer-container"]}>
      <div className={styles["search-main-container"]}>
        <div className={styles["search-input-box"]}>
          <Input
            type="text"
            placeholder="Search for restaurants and food"
            onChange={searchHandler}
            value={state.searchedText}
            clearType="icon"
          >
            {!state.searchedText && (
              <span className={styles["search-input-icon"]}>
                <img src={SearchIcon} alt="search" />
              </span>
            )}
          </Input>
        </div>
        <div className={styles["search-addition-items"]}>
          <h2>Popular Cuisines</h2>
          <div className={styles["search-addition-all-images"]}>
            <div className={styles["search-addition-image-item"]}>
              <div className={styles["search-addition-image"]}>
                <img src={Pizza} alt="pizzas" />
              </div>
              <p>Pizzas</p>
            </div>
            <div className={styles["search-addition-image-item"]}>
              <div className={styles["search-addition-image"]}>
                <img src={Burger} alt="burger" />
              </div>
              <p>Burger</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
