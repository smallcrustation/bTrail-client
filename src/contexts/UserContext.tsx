import React, { createContext, useState, useEffect } from 'react'
import firebaseApp from '../firebaseConfig'
import { User } from 'firebase'
import AuthApiService from '../services/auth-api-service'

interface UserContextProps {
  user: User | null
  setUser: Function
  authenticated: Boolean
  handleLogout: Function
}

export const UserContext = createContext<Partial<UserContextProps>>({})

const UserContextProvider = (props: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [authenticated, setAuthenticated] = useState<Boolean>(false)

  const handleLogout = async () => {
    console.log('logout')
    AuthApiService.logoutUser()
    if (setUser) setUser(null)
    setAuthenticated(false)
  }

  // set observer for firebase Auth state change
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(user => {
      setUser(user)
      setAuthenticated(true)
    })
  }, [user])

  const value = {
    user,
    setUser,
    authenticated,
    handleLogout
  }

  // console.log(user)

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  )
}

// export const UserContextConsumer = UserContext.Consumer
export default UserContextProvider
