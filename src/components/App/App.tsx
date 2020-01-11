import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../../pages/LandingPage/LandingPage'
import AuthenticatedPage from '../../pages/AuthenticatedPage/AuthenticatedPage'
import UserContextProvider from '../../contexts/UserContext'
import PrivateRoute from '../Utils/PrivateRoute'

const App: React.FC = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* <Route path="/ap" component={AuthenticatedPage} /> */}
          <PrivateRoute path="/ap" component={AuthenticatedPage} />
        </Switch>
      </UserContextProvider>
    </div>
  )
}

export default App
