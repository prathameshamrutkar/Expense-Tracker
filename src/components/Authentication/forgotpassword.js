import React from 'react';
import "./forgotpassword.css";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Alert } from '@material-ui/lab';

const ForgotPassword = () => {

    // const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const auth = getAuth();

    const resetPassword = () => {

        // e.preventDefault();
        setError("")
        sendPasswordResetEmail(auth, email, { url: 'http://localhost:3000/' })

            .then((userCredential) => {
                setError("Check your Email")
                console.log('hello')
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setError(error.message)
            });
    }

    return (

        <div className="container">
            <div className='App3'>
                <h1>Forgot Password</h1>
                <div className='input-container'>
                    <label>Email</label>
                    <input type={"email"} placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                {error && <Alert className='alert1' severity='error'><strong>{error}</strong></Alert>}
                <button className='submit' onClick={resetPassword}>
                    <p>Submit</p>
                </button>
                <div className='back'>Back to
                    <span>
                        <Link to="/">Login</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;