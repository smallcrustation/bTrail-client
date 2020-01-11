import React, { ReactElement, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { Route, Redirect, RouteProps } from 'react-router-dom'

interface Props extends RouteProps{
  component: any
}

function PublicRoute({ component, ...props }: Props): ReactElement {
  const { user } = useContext(UserContext)
  const Component = component

  return (
    <Route
      {...props}
      render={componentsProps =>
        user ? (
          <Redirect to={'/landingPage'} />
        ) : (
          <Component {...componentsProps} />
        )
      }
    ></Route>
  )
}

export default PublicRoute
