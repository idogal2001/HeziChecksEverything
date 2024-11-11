import React, { useContext } from "react";
import styles from "../../../styles/Filters/Filter.module.scss";
import { HomePageContext } from "../../../Pages/HomePage";


const DateNew = () => {

  const homePageData = useContext(HomePageContext);

  if(!homePageData){
    throw new Error("homePageData is unavavilble");
  }

  const productList = homePageData.productList;
  const setProductList = homePageData.setProductList;

    const dateSortingNew = () => {
      setProductList([...productList].sort(
        ({ date: itemDateFirst }, { date: itemDateSecond }) =>
          new Date(itemDateSecond).getTime() - new Date(itemDateFirst).getTime()
      ));
      };

    return (
        <p className={styles.buttonPadding}>
          <input
            type="radio"
            name="radio"
            className="button"
            onClick={dateSortingNew}
          />
          <span className={styles.filterNames}>Newest To Oldest</span>
        </p>
    )
}

export default DateNew;