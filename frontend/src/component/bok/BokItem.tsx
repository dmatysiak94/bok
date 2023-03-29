import React from "react";
import Cart from "../UI/Cart";

import styles from './BokItem.module.css'
import Link from "next/link";
import {useMutation} from "@apollo/client";

import moment from "moment/moment";
import {formClicked} from "@/graphql/Mutations";

const BokItem: React.FC<{ id: string, topic: string, created: string, clicked: boolean }> = (props) => {

    const [clicked, {data, loading, err}] = useMutation(formClicked);

    const localDateTime = moment(Number(props.created)).format('lll');

    console.log(localDateTime)

    const date = new Date(Number(props.created)).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })

    const clickHandler = async (event) => {
        await clicked({variables: {
                id: props.id,
                }})
    }

    return (
        <div onClick={clickHandler}>
            <Link href={`/bok/${props.id}`}>
                <Cart className={`${styles.bokItem} ${props.clicked ? {} : styles.checked}`}>
                    <div>
                        <h2>
                            {props.topic}
                        </h2>
                    </div>
                    <p>{localDateTime}</p>
                </Cart>
            </Link>
        </div>
    )

}

export default BokItem;