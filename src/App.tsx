import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute'

const App: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute
        path='/'
        component={Dashboard}
        isAuthenticated={Boolean(localStorage.getItem('accessToken'))}
        exact
      />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
    </Switch>
  )
}

export default App
