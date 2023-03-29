import {useState} from 'react';
import classes from './AuthForm.module.css';
import Cart from "@/component/UI/Cart";
import {useMutation} from "@apollo/client";
import {addThreadMutation, createUserMutation} from "@/graphql/Mutations";

function AuthForm() {
    const [createUser, {data, loading, err}] = useMutation(createUserMutation);

    const [isLogin, setIsLogin] = useState(true);

    const [enteredEmail, setEmail] = useState('');
    const [enteredPassword, setPassword] = useState('');
    const [enteredConfirmPassword, setConfirmPassword] = useState('');

    function switchAuthModeHandler() {
        setIsLogin((prevState) => !prevState);
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const confirmPasswordChangeHandler = (event) => {
        setConfirmPassword(event.target.value)
    }

    const actionButtonHandler = async (event) => {
        event.preventDefault()
        if (!isLogin) {
            await createUser({
                variables: {
                    email: enteredEmail,
                    password: enteredPassword,
                    confirmPassword: enteredConfirmPassword
                }
            })
        }

        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <Cart className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={actionButtonHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required onChange={emailChangeHandler}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input type='password' id='password' required onChange={passwordChangeHandler}/>
                </div>
                {!isLogin && <div className={classes.control}>
                  <label htmlFor='confirm password'>Your Password</label>
                  <input type='password' id='confirm password' required onChange={confirmPasswordChangeHandler}/>
                  </div>}
                <div className={classes.actions}>
                    <button>{isLogin ? 'Login' : 'Create Account'}</button>
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </Cart>
    );
}

export default AuthForm;
