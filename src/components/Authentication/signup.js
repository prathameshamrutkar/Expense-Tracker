import React from 'react';
import app from '../../firebase.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import "./signup.css";


const SignupForm = () => {

    const auth = getAuth(app);
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const signUp = async (e) => {

        e.preventDefault();
        setError("")

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // console.log(user);
                // alert("Succesfully created an account");
                navigate("/")
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // alert(errorCode);
                setError(error.message)
            });

    }

    return (

        <div className="container">
            <div className='App1'>
                <h1>Sign Up</h1>
                <div className='input-container'>
                    <label>Email</label>
                    <input type={"email"} placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='input-container'>
                    <label>Password</label>
                    <input type={"password"} placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error && <Alert className='alert2' severity='error'><strong>{error}</strong></Alert>}
                <button className='btn2' onClick={signUp}>
                    <p>Create Account</p>
                </button>
                <div className='display'>Already have an account?
                    <span>
                        <Link to="/">Log In</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SignupForm;