import React, { ReactElement, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { Route, Redirect, RouteProps } from 'react-router-dom'

interface Props extends RouteProps{
  component: any
}

function PrivateRoute({ component, ...props }: Props): ReactElement {
  console.log('PIRVACY')
  console.log(component)
  console.log(props)

  const { authenticated } = useContext(UserContext)
  const Component = component

  console.log('PrivateRoute', authenticated)
  return (
    <Route
      {...props}
      render={componentsProps =>
        authenticated ? (
          <Component {...componentsProps} />
        ) : (
          <Redirect to={'/'} />
        )
      }
    ></Route>
  )
}

export default PrivateRoute
