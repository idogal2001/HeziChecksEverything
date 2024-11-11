import React from "react"
import styles from '../../styles/CartPage/PopUp.module.scss'

interface Product {
    id: number;
    image: string;
    description: string;
    name: string;
    price: number;
    amount: number;
  }

interface PopUpProps {
    productNewList: Product[];
    popUp: boolean;
    setPopUp: React.Dispatch<React.SetStateAction<boolean>>
}

const PopUp = ({ productNewList, popUp, setPopUp }: PopUpProps) => {

    const checkOut =() => {
        setPopUp(!popUp);
    }

    return(
        <div className={styles.popUpBackground}>
        <div className={styles.popUp}>
        <p className="checkUutBox">
        {productNewList.map((product: Product) => (
            <span className={styles.checkOutBoxItem} key={product.id}><p><img className={styles.img} alt = {`product${product.id}`} src = {product.image}></img></p><p>{product.name}</p><p>{product.amount}</p><p>{product.price * product.amount}₪</p></span>
        ))}
        </p>
        <div className={styles.checkOutButtonPadding}><button className={styles.checkOutButton} onClick={checkOut}>Close!</button></div>
        </div>
    </div>
    )
}

export default PopUp;