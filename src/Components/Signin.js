import React, { useState } from 'react'
import '../Style/Signin.css'
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import { useStateValue } from "./StateProvider";


function Signin() {

    const [{ basket, user }, dispatch] = useStateValue();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    const signin = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            if(auth){
                dispatch({
                    type: "SET_USER",
                    user: auth.user,
                })
                history.push('/')
            }
        })
        .catch(err => alert(err.message))
    }

    const signup = (e) =>  {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if(auth){
                dispatch({
                    type: "SET_USER",
                    user: auth.user,
                })
                history.push('/')
            }
        })
        .catch(err => alert(err.message))

    }

    return (
        <div className="signin">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="signin__logo" />
            <div className="signin__card">
                <h1>Sign-In</h1>
                <h4>E-mail</h4>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <h4>Password</h4>
                <input type="password" value={password} onChange= {(e) => setPassword(e.target.value)}/>
                <br />
                <button className="signin__signin" onClick={signin}>Sign In</button>
                <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button className="signin__signup" onClick={signup}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Signin
