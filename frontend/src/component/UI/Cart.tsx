import React from "react";
import styles from './Cart.module.css'

const Cart : React.FC<{}> = (props) => {
    return (
        <div className={`${styles.cart} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Cart;