import React, {Fragment, useState} from "react";

import styles from './BokCommentSection.module.css'
import Cart from "../UI/Cart";
import BokCommentItem from "./ComentItem";
import {useMutation} from "@apollo/client";
import Button from "@/component/UI/Button";
import {IComments} from "@/types/IComments";
import {addCommentMutation} from "@/graphql/Mutations";

const BokCommentSection: React.FC<{ comments: IComments[], formId: string }> = (props) => {

    const [enteredComment, setEnteredComment] = useState('');
    const [createComment, {data, loading, err}] = useMutation(addCommentMutation);

    const commentInputChangeHandler = (event) => {
        setEnteredComment(event.target.value);
    }

    const submitCommentHandler = async (event) => {
        event.preventDefault();

        if (enteredComment.trim() === '') {
            return
        }

        await createComment({
            variables: {
                content: enteredComment,
                formId: props.formId
            }
        })
    }

    return (
            <Cart className={`${styles.app} ${styles.all}`}>
                <div className={styles.commentList}>
                    {props.comments.map(comment => {
                        return <BokCommentItem key={comment.id} content={comment.content} created={comment.created}/>
                    })}
                </div>
                <div className={styles.comment}>
                    <form onSubmit={submitCommentHandler}>
                        <div className={`${styles.formControl}`}>
                            <label htmlFor='Comment'>Comment</label>
                            <textarea type='text' id='Comment' className={styles.textarea}
                                      onChange={commentInputChangeHandler}/>
                        </div>
                        <div>
                            <Button>Submit</Button>
                        </div>
                    </form>
                </div>
            </Cart>
    )
}

export default BokCommentSection;