import React, { useContext } from "react";
import styles from "../../../styles/Filters/Filter.module.scss";
import { HomePageContext } from "../../../Pages/HomePage";


const PriceLow = () => {

  const homePageData = useContext(HomePageContext);

  if(!homePageData){
    throw new Error("homePageData is unavavilble");
  }

  const productList = homePageData.productList;
  const setProductList = homePageData.setProductList;

    const priceSortingLow = () => {
      setProductList([...productList].sort(
        ({ price: itemPriceFirst }, { price: itemPriceSecond }) =>
          itemPriceFirst - itemPriceSecond
      ));

      };
      
    return (
        <p className={styles.buttonPadding}>
        <input
          type="radio"
          name="radio"
          className="button"
          onClick={priceSortingLow}
        />
        <span className={styles.filterNames}>Low To High</span>
      </p>
    )
}

export default PriceLow;