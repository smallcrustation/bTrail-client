import React, { ReactElement} from 'react'
import Login from '../../components/Login/Login'
import CreateAccount from '../../components/CreateAccount/CreateAccount'

interface Props {}

function LandingPage(): ReactElement {
  return (
    <div className="LandingPage">
      <Login />
      <CreateAccount />
    </div>
  )
}

export default LandingPage
