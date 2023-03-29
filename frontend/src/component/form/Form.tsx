import React, {useState} from "react";
import styles from './Form.module.css'

import {useMutation} from "@apollo/client";
import Cart from "../UI/Cart";
import Button from "@/component/UI/Button";
import {contactValidator} from "@/helper/Validators";
import {ContactValidator} from "@/types/ContactValidator";
import {IStoreBranch} from "@/types/IStoreBranchDict";
import {addThreadMutation} from "@/graphql/Mutations";


const Form: React.FC<{ stores: IStoreBranch[] }> = (props) => {

    const [createThread, {data, loading, err}] = useMutation(addThreadMutation);

    const [enteredTopic, setEnteredTopic] = useState('');
    const [enteredTopicTouched, setEnteredTopicTouch] = useState(false);

    const [enteredComment, setEnteredComment] = useState('');
    const [enteredCommentTouched, setEnteredCommentTouch] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);

    const [enteredPhone, setEnteredPhone] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(true);

    const [enteredStoreBranch, setEnteredStoreBranch] = useState(null)

    const [consent, setConsent] = useState(false);
    const [isConsent, setIsConsent] = useState(true);

    const enteredTopicIsValid = enteredTopic.trim() !== ''
    const topicInputIsInvalid = !enteredTopicIsValid && enteredTopicTouched;

    const enteredCommentIsValid = enteredComment.trim() !== ''
    const commentInputIsInvalid = !enteredCommentIsValid && enteredCommentTouched;

    const topicInputChangeHandler = (event) => {
        setEnteredTopic(event.target.value);
    }

    const commentInputChangeHandler = (event) => {
        setEnteredComment(event.target.value);
    }

    const emailInputChangeHandler = (event) => {
        setIsEmailValid(true);
        setEnteredEmail(event.target.value);
    }

    const phoneInputChangeHandler = (event) => {
        setIsPhoneValid(true);
        setEnteredPhone(event.target.value);
    }

    const consentInputChangeHandler = () => {
        setConsent(!consent);
    }

    const storeBranchInputChangeHandler = (event) => {
        setEnteredStoreBranch(event.target.value);
    }

    const topicInputBlurHandler = () => {
        setEnteredTopicTouch(true);
    }

    const commentInputBlurHandler = () => {
        setEnteredCommentTouch(true);
    }

    const formSubmissionHandler = async (event) => {
         event.preventDefault();

        setEnteredTopicTouch(true);
        setEnteredCommentTouch(true);

        if (!enteredTopicIsValid) {
            return;
        }

        if (!enteredCommentIsValid) {
            return;
        }

        const validated: ContactValidator = contactValidator(enteredEmail, enteredPhone, consent);
        console.log('email', validated.email, 'phone', validated.phone, 'consent', validated.consent)

        setIsEmailValid(prevState => {
            return validated.email
        });
        setIsPhoneValid(prevState => {
            return validated.phone
        });
        setIsConsent(prevState => {
            return validated.consent
        });

        if(enteredEmail.trim() !== '') {
            if((!validated.email && validated.consent)  || (validated.email && !validated.consent)){
                return
            }
        }

        if(enteredPhone.trim() !== '') {
            if((!validated.phone && validated.consent)  || (validated.phone && !validated.consent)){
                return
            }
        }

        await createThread({variables: {
            topic: enteredTopic,
            comment: enteredComment,
            storeBranchId: enteredStoreBranch,
            email: enteredEmail,
            phoneNumber: enteredPhone,
            consent: consent}})

        setEnteredTopic('');
        setEnteredTopicTouch(false);

        setEnteredComment('');
        setEnteredCommentTouch(false);

        setConsent(false);
        setEnteredEmail('');
        setEnteredPhone('')
        consentInputChangeHandler();
    }

    return (
        <Cart className={styles.app}>
            <form onSubmit={formSubmissionHandler}>
                <div className={`${styles.formControl} ${topicInputIsInvalid ? styles.invalid : {}}`}>
                    <input type='text' id='Topic' className={styles.topic} onChange={topicInputChangeHandler}
                           onBlur={topicInputBlurHandler} value={enteredTopic} placeholder="Topic"/>
                    {topicInputIsInvalid && <p className={topicInputIsInvalid ? styles.errorText : {}}>name not empty</p>}
                </div>
                <div className={`${styles.formControl} ${commentInputIsInvalid ? styles.invalid : {}}`}>
                    <textarea type='text' id='Comment' className={styles.textarea} onChange={commentInputChangeHandler}
                              onBlur={commentInputBlurHandler} value={enteredComment} placeholder="Your Comment"/>
                    {commentInputIsInvalid && <p className={commentInputIsInvalid ? styles.errorText : {}}>name not empty</p>}
                </div>
                <div className={`${styles.formControl} ${isEmailValid ? {} : styles.invalid}`}>
                    <input type='text' id='email' onChange={emailInputChangeHandler} value={enteredEmail} placeholder="Email Address"/>
                    {!isEmailValid && <p className={isEmailValid ? {} : styles.errorText }>email is invalid</p>}
                </div>
                <div className={`${styles.formControl} ${isPhoneValid ? {} : styles.invalid}`}>
                    <input type='text' id='phone' onChange={phoneInputChangeHandler} value={enteredPhone} placeholder="Phone Number"/>
                    {!isPhoneValid && <p className={isPhoneValid ? {} : styles.errorText }>phone invalid. +xxxxxxxxxxx/xxxxxxxxx</p>}
                </div>
                <div className={styles.formControl}>
                    <select
                        onChange={e => storeBranchInputChangeHandler(e)} className={styles.select}>
                        <option value='default'>choose Store you are reffering to</option>
                        {
                            props.stores.map((store, key) => <option key={store.id} value={store.id}>{store.name}
                            </option>)
                        }
                    </select >
                </div>
                <div className={`${styles.checkbox} ${isConsent ? {} : styles.invalidCons}`}>
                    <input type='checkbox' checked={consent} id='consent' name='consent' value='consent' onChange={consentInputChangeHandler}/>
                    <label>Zgoda na wykorzystanie e-mail i/lub numeru telefonu do kontaktu</label>
                </div>
                <div className={styles.formActions}>
                    <Button>Submit</Button>
                </div>
            </form>
        </Cart>
    )
}

export default Form