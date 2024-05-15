import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import "./login.css";


const LoginForm = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const auth = getAuth();

    localStorage.setItem('login', email);


    const googleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleAuthProvider);
    }

    auth.onAuthStateChanged(user => {
        if (user) {
            localStorage.setItem('islogged', true)
            navigate("/home")
        }
    })

    const logIn = async (e) => {

        e.preventDefault();
        setError("")

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential
                // alert("You have logged in");
                localStorage.setItem('islogged', true)
                navigate("/home")
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setError(error.message)
            });
    }

    return (

        <div className="container">
            <div className='App2'>
                <h1>Login</h1>
                <div className='input-container'>
                    <label>Email</label>
                    <input type={"email"} placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='input-container'>
                    <label>Password</label>
                    <input type={"password"} placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                {/* <a id='forgot' href="#">Forgot password?</a> */}
                {error && <Alert className='alert1' severity='error'><strong>{error}</strong></Alert>}
                <button className='btn1' onClick={logIn}>
                    <p>Log In</p>
                </button>
                <button className="siG" onClick={googleSignIn}>
                    <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="Trees" height="30" />
                    <p>Sign in with Google</p>
                </button>
                <div className='statement1'>Don't have an account?
                    <span>
                        <Link to="/signup">Sign Up</Link>
                    </span>
                </div>
                <div className='statement2'>
                    <span>
                        <Link to="/forgotpassword">Forgot Password?</Link>
                    </span>
                </div>
            </div>
        </div>

    )
}

export default LoginForm;