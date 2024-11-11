import React, { useContext } from "react";
import styles from "../../../styles/Filters/Filter.module.scss";
import { HomePageContext } from "../../../Pages/HomePage";

const DateOld = () => {

  const homePageData = useContext(HomePageContext);

  if(!homePageData){
    throw new Error("homePageData is unavavilble");
  }

  const productList = homePageData.productList;
  const setProductList = homePageData.setProductList;

    const dateSortingOld = () => {
      setProductList([...productList].sort(
        ({ date: itemDateFirst }, { date: itemDateSecond }) =>
          new Date(itemDateFirst).getTime() - new Date(itemDateSecond).getTime()
      ));
      };

    return (
        <p className={styles.buttonPadding}>
        <input
          type="radio"
          name="radio"
          className="button"
          onClick={dateSortingOld}
        />
        <span className={styles.filterNames}>Oldest To Newest</span>
      </p>
    )
}

export default DateOld;