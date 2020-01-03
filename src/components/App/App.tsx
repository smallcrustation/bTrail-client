import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../../pages/LandingPage/LandingPage'
import AuthenticatedPage from '../../pages/AuthenticatedPage/AuthenticatedPage'

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/ap" component={AuthenticatedPage} />
      </Switch>
    </div>
  )
}

export default App
