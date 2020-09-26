import React from 'react'
import { render, screen } from '@testing-library/react'
import { PrivateRoute } from './'
import Dashboard from '../../pages/Dashboard'
import Login from '../../pages/Login'
import { Router, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'
import { MockContainer } from '../MockContainer'

describe('Private routes', () => {
  const history = createMemoryHistory()
  test('Authenticated', () => {
    render(
      <Router history={history}>
        <PrivateRoute path='/' component={Dashboard} isAuthenticated={true} />
      </Router>
    )

    expect(screen.getByText(/BOOM DASHBOARD/i)).toBeInTheDocument()
  })

  test('Unauthenticated', () => {
    render(
      <MockContainer>
        <Router history={history}>
          <PrivateRoute path='/' component={Dashboard} isAuthenticated={false} />
          <Route path='/login' component={Login} />
        </Router>
      </MockContainer>
    )

    expect(screen.getByText(/Howdy/i)).toBeInTheDocument()
  })
})
