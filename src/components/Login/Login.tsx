import React, { ReactElement, useState, useContext } from 'react'
import AuthApiService from '../../services/auth-api-service'
import {UserContext} from '../../contexts/UserContext'
import { useHistory } from 'react-router-dom'

function Login(): ReactElement {
  const history = useHistory()
  const {user, handleLogout} = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      loginEmail: { value: string }
      loginPassword: { value: string }
    }
    // console.log(target.loginEmail.value, target.loginPassword.value)
    setLoading(true)
    try {
      await AuthApiService.signInWithEmailPassword({
        email: target.loginEmail.value,
        password: target.loginPassword.value
      })
      // console.log('login success')
      setErrorMessage(null)
      setLoading(false)
      history.push('/ap')
    } catch (e) {
      const message = AuthApiService.authErrorSwitch(e)
      setLoading(false)
      setErrorMessage(message)
      // console.log(message)
    }
    // setLoading(false) needs to run b4 history.push
  }

  // firebaseApp.auth().onAuthStateChanged(user => {
  //   if (user && setUser) {
  //     setUser(user)
  //   } 
  // })

  return (
    <div className="Login">
      <h1>Login</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
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
      )}
      {errorMessage ? <p className="error">{errorMessage}</p> : ''}
      {user ? <button onClick={handleLogout?() => handleLogout():()=>null}>logout</button> : ''}
    </div>
  )
}

export default Login
