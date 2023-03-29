import React from "react";
import Cart from "../UI/Cart";
import styles from './BokCaseSection.module.css'
import {IForm} from "@/types/IForm";


const BokCaseSection: React.FC<{ form: IForm }> = (props) => {

    return (
        <Cart className={`${styles.app} ${styles.bokContent}`}>
            <div className={`${styles.formControl}`}>
                <label htmlFor='Topic'>Topic</label>
                <div className={styles.long}>{props.form.topic}</div>
            </div>
            <div className={`${styles.formControl}`}>
                <label htmlFor='Comment'>Comment</label>
                <div className={styles.long}>{props.form.comment}</div>
            </div>
            <div className={`${styles.formControl}`}>
                <label htmlFor='email'>Your Email</label>
                <div className={styles.short}>{props.form.email}</div>
            </div>
            <div className={`${styles.formControl}`}>
                <label htmlFor='phone'>Phone</label>
                <div className={styles.short}>{props.form.phoneNumber}</div>
            </div>
            <div className={`${styles.formControl}`}>
                <label htmlFor='phone'>Store</label>
                <div className={styles.short}>{props.form.storeBranch?.name}</div>
            </div>
        </Cart>
    )
}

export default BokCaseSection;