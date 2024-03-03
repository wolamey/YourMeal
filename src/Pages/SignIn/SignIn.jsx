import React from 'react'
import "./SignIn.scss"
import { Link , useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function SignIn() {
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repPass, setRepPass] = useState("");
  const [errorRepPass, setErrorRepPass] = useState(false)

  const navigate = useNavigate()


  function getUserData (event){
    console.log(lastName, name)
    event.preventDefault();
    if(pass !== repPass) {
      setErrorRepPass(true);
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
    .then(user => {
      console.log(user)
    navigate("/");
    }).catch(e=> console.log(e))
  }

  return (
    <div className='container_form'>
      <form className="decor" onSubmit={getUserData}>
        <div className="form-left-decoration"></div>
        <div className="form-right-decoration"></div>
        <div className="circle"></div>
        <div className="form-inner">
          <h3>Sign In</h3>

          <input required type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input required type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />

          <input required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input required type="password" placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} />

          {errorRepPass&&<p className="error_txt">Passwords don't match</p>}
          <input required type="password" placeholder='Repeat password' value={repPass} onChange={e => setRepPass(e.target.value)} />

          <input type="submit" value="Sign In" />
          <Link className='linkSignIn' to="/LogIn">Log in</Link>
        </div>
      </form>
    </div>

  )
}
