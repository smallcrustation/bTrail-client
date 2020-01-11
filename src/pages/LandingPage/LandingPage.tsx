import React, { ReactElement, useState, useEffect, useContext } from 'react'
import Login from '../../components/Login/Login'
import CreateAccount from '../../components/CreateAccount/CreateAccount'
import {UserContext} from '../../contexts/UserContext'

// interface Props {}

function LandingPage(): ReactElement {
  const {user, authenticated} = useContext(UserContext)
  const [message, setMessage] = useState()

  // const fetchMessage = async () => {
  //   try {
  //     const res = await fetch('http://localhost:8000/api/home')
  //     return res.json()
  //   } catch (e) {
  //     console.error(e.message)
  //     return e
  //   }
  // }

  // useEffect(() => {
  //   fetchMessage().then(res =>
  //     setMessage(res.error ? res.error.message : res.message)
  //   )
  // }, [])

  console.log('Landing Page', authenticated)

  return (
    <div className="LandingPage">
      <h1>Landing</h1>
      <h2>
        Authorized:{' '}
        {authenticated ? (
          <span className="success">
            'Authenticated': {authenticated?'True':'False'};{user ? user.email : ''}
          </span>
        ) : (
          <span className="error">'Not Authenticated'</span>
        )}
      </h2>
      <h2>{message}</h2>
      <Login />
      <CreateAccount />
    </div>
  )
}

export default LandingPage
