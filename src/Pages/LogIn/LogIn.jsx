import React from 'react'
import "./LogIn.scss"

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export default function LogIn({setLoged}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)

    const navigate = useNavigate()


    function getLoginData(event) {
        event.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                console.log(user)
                setLoged(true)
                navigate("/");
            })
            .catch((e) => {
                setError(true)
                console.log(e)
            })
    }

    return (
        <div className='container_form'>
            <form className="decor" onSubmit={getLoginData}>
                <div className="form-left-decoration"></div>
                <div className="form-right-decoration"></div>
                <div className="circle"></div>
                <div className="form-inner">
                    <h3>Log in</h3>
                    {error && <p className="error_txt">Invalid password or email</p>}

                    <input type="email"
                        placeholder="Email"
                        required
                        value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" required placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                    <input type="submit" value="Log in " />
                    <Link className='linkSignIn' to="/SignIn">Sign In</Link>
                </div>
            </form>
        </div>
    )
}
