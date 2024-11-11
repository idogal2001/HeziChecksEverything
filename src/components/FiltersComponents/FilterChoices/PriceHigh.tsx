import React, { useContext } from "react"
import styles from "../../../styles/Filters/Filter.module.scss";
import { HomePageContext } from "../../../Pages/HomePage";

const PriceHigh = () => {

  const homePageData = useContext(HomePageContext);

  if(!homePageData){
    throw new Error("homePageData is unavavilble");
  }

  const productList = homePageData.productList;
  const setProductList = homePageData.setProductList;


    const priceSortingHigh = () => {
      setProductList([...productList].sort(
        ({ price: itemPriceFirst }, { price: itemPriceSecond }) =>
          itemPriceSecond - itemPriceFirst
      ));
      };
      
    return (
        <p className={styles.buttonPadding}>
          <input
            type="radio"
            name="radio"
            className="button"
            onClick={priceSortingHigh}
          />
          <span className={styles.filterNames}>High To Low</span>
        </p>
    )
}

export default PriceHigh;