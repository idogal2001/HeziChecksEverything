import React from "react";
import Categories from "../Categories";
import SearchBar from "../SearchBar";
import PriceLow from "./PriceLow";
import PriceHigh from "./PriceHigh";
import DateOld from "./DateOld";
import DateNew from "./DateNew";
import InputMax from "./InputMax";
import InputMin from "./InputMin";
import styles from "../../../styles/Filters/Filter.module.scss";

const Filters = () => {

    return (
        <div className={styles.filterImageAndNameContainer}>
            <SearchBar />
      <h3 className={styles.sortBy}>Sort by:</h3>
        <div className={styles.priceSort}>
        <p>Price Sort:</p>
        <PriceLow />
        <PriceHigh />
        <InputMax />
        <InputMin />
      </div>
      <div className={styles.dateSort}>
        <p>Date Sort:</p>
        < DateNew />
        <DateOld />
      </div>
        <Categories />
        </div>
    )
}

export default Filters;