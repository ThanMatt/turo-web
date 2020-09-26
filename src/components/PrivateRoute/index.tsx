import React from 'react'
import { Redirect, RouteProps, Route } from 'react-router-dom'

type PrivateRouteProps = {
  component: React.FC
  isAuthenticated: Boolean
}

export const PrivateRoute: React.FC<PrivateRouteProps & RouteProps> = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => {
  return (
    <Route
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
      }
      {...routeProps}
    />
  )
}
