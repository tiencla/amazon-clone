import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import auth from '../../firebase-config';
import './Login.css'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        // // Login logic
        signInWithEmailAndPassword( auth, email, password)
        .then((userCridential) => {
          //* Signed in
            const user = userCridential.user;
            navigate('/')
            alert('Logged in successfully')
        })
        .catch((error) => { 
          const errorCode = error.code;
          const errorMessage = error.message;
            alert(errorMessage)
        })
    }

    const register = (e) => {
        e.preventDefault();
        // // Register logic
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //* Signed in 
            const user = userCredential.user;
            navigate('/')
            alert('Registered successfully')
            }
        )
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        })
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='Amazon Logo' />
        </Link>
        <div className='login_container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={e => setEmail(e.target.value)} type='email' />
                <h5>Password</h5>
                <input value={password} onChange={e => setPassword(e.target.value)} type='password' />
                <button onClick={login} type='submit' className='login_signInButton'>Sign In</button>
            </form>
            <p>
                By continuing you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login