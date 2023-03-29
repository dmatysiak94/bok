import React from "react";
import Cart from "../UI/Cart";
import styles from './CommentItem.module.css'
import moment from "moment";


const BokCommentItem: React.FC<{ content: string, created: string }> = (props) => {

    const localDateTime = moment(Number(props.created)).format('lll');

    console.log(localDateTime)

    const date = new Date(Number(props.created) * 1000).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })

    return (
        <Cart className={`${styles.commentContent}`}>
            <div className={`${styles.formControl}`}>
                <label htmlFor='Topic'>{localDateTime}</label>
                <div >{props.content}</div>
            </div>
        </Cart>
    )
}

export default BokCommentItem;