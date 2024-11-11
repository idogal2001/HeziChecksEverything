import { Link, useParams  } from 'react-router-dom';
import { ProductsDataBackUp } from '../ProductsDataBackUp';
import React, { useState } from 'react';
import NotFoundPage from './NotFoundPage';
import Navbar from '../components/Navbar';
import AddItemProductPage from '../components/AddItemProductPage';
import styles from '../styles/ProductPage/ProductPage.module.scss';

interface product {
    category: string;
    name: string;
    date: string;
    price: number;
    description: string;
    image: string;
    id: number;
}

const ProductPage = () => {

    const { id } = useParams<string>();
    const productInfo = ProductsDataBackUp.filter((product: product) => product.id === Number(id))
    const [priceTotal, setPriceTotal] = useState<number>(0);
    const [itemAmount, setItemAmount] = useState<number>(0);
    const [allowAdd, setAllowAdd] = useState<boolean>(false);

    const changeAmount = (value: React.FormEvent<HTMLInputElement>) => {
                if(Number(value.currentTarget.value) > 0 && Number(value.currentTarget.value) <= 20 && (Number(value.currentTarget.value) % 1) === 0){
                    setAllowAdd(true);
                    setItemAmount(Number(value.currentTarget.value));
                    setPriceTotal((Number(value.currentTarget.value) * productInfo[0].price))
        }
        else{
            setAllowAdd(false);
            setPriceTotal(0);
        }
    }              

    if(Number(id) <= ProductsDataBackUp.length && Number(id) >=0){
        return (
            <div className={styles.productPage}>
            <Navbar />
            <div className={styles.webContainerProduct}>
                <div className={styles.productInfo}>
                    <img className={styles.img} src={productInfo[0].image} alt="Product" /> 
                    <p>{productInfo[0].name}</p>
                    <p>Category: {productInfo[0].category}</p>
                    <p>Price: {productInfo[0].price}₪</p>
                    <span className={styles.descriptionPadding}>Description: {productInfo[0].description}</span> 
                    <span className={styles.productAmount}>
                        <input className={styles.itemInput} type="number" name='Amount of Item' defaultValue="0"onChange={changeAmount}></input>
                    </span>
                    <span  className={styles.priceOfItem}>Price: {priceTotal}₪</span>
                    <AddItemProductPage
                    id={productInfo[0].id}
                    image={productInfo[0].image}
                    description={productInfo[0].description}
                    name={productInfo[0].name}
                    price={productInfo[0].price}
                    itemAmount={itemAmount}
                    allowAdd={allowAdd}
                    />
                    <Link to="/"><span className={styles.linkToHomePage}>Continue shopping :)</span></Link>
                </div>
            </div>
        </div>
        );
    }
    else{
        return(
            <NotFoundPage />
            )
    }
}

export default ProductPage;