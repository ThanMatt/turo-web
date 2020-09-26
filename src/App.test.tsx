import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { createMemoryHistory } from 'history'
import { MockContainer } from './components/MockContainer'

describe('App navigation', () => {
  test('Unauthenticated', () => {
    const history = createMemoryHistory()

    render(
      <MockContainer>
        <Router history={history}>
          <App />
        </Router>
      </MockContainer>
    )

    expect(screen.getByText(/Howdy/i)).toBeInTheDocument()
    const leftClick = { button: 0 }
    /* @ts-ignore */
    userEvent.click(screen.getByText(/Sign up/i), leftClick)

    expect(screen.getByText(/Sign up/i)).toBeInTheDocument()
  })
})
