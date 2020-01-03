import React, { ReactElement, useEffect, useState } from 'react'
import AuthApiService from '../../services/auth-api-service'
import firebaseApp from '../../firebaseConfig'

interface Props {}

function Login({}: Props): ReactElement {
  const [message, setMessage] = useState('')
  const [authorized, setAuthorized] = useState(false)

  const handleLogout = async () => {
    AuthApiService.logoutUser()
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    // console.log('Submitd Clicked')
    const target = e.target as typeof e.target & {
      loginEmail: { value: string }
      loginPassword: { value: string }
    }
    // console.log(target.loginEmail.value, target.loginPassword.value)
    try {
     await AuthApiService.signInWithEmailPassword({
        email: target.loginEmail.value,
        password: target.loginPassword.value
      })
      console.log("login success")
    } catch (e) {
      console.log(e.message)
    }
  }

  const fetchMessage = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/home')
      return res.json()
    } catch (err) {
      console.log('ERROR', err)
      return err
    }
  }

  useEffect(() => {
    fetchMessage().then(res =>
      console.log(res.error ? res.error.message : res.message)
    )
    fetchMessage().then(res =>
      setMessage(res.error ? res.error.message : res.message)
    )
  })

  firebaseApp.auth().onAuthStateChanged((user) => {
    if(user){
      setAuthorized(true)
    }
    else{
      setAuthorized(false)
    }
  })

  // http://localhost:8000/api/home
  return (
    <div className="LandingPage">
      <h2>Authorized: {authorized ? 'Authenticated' : 'Not Authenticated'}</h2>
      <h2>{message}</h2>

      <h1>Login</h1>

      <form className="SignInForm" onSubmit={handleSubmit}>
        <input
          className="txtb"
          type="text"
          autoComplete="off"
          id="loginEmail"
          name="loginEmail"
          placeholder="email@host.com"
          required
        />

        <input
          className="txtb"
          type="password"
          id="loginPassword"
          name="loginPassword"
          placeholder="password"
          required
        />

        <input className="signin-btn" type="submit" value="Sign In" />
      </form>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Login
