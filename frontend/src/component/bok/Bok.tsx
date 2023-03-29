import React from "react";
import BokItem from "./BokItem";
import Cart from "../UI/Cart";

import styles from './bok.module.css'
import {IForm} from "@/types/IForm";

const Bok: React.FC<{forms: IForm[]}> = (props) => {
    return(
        <Cart className={styles.app}>
            {props.forms.map(form => {
                return <BokItem key={form.id} id={form.id} topic={form.topic} created={form.created} clicked={form.clicked}/>
            })}
        </Cart>
    )
}

export default Bok;