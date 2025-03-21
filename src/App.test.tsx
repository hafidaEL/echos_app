import '@testing-library/jest-dom'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import App from './App'
import { AuthContext } from './contexts'
import { USER_WITH_MULTIPLE_SUBSCRIPTION } from './mocks/user'

describe('App component', () => {
  it('display components Header and ListItems', async () => {
    const mockUser = USER_WITH_MULTIPLE_SUBSCRIPTION

    render(
      <AuthContext.Provider value={mockUser}>
        <App />
      </AuthContext.Provider>
    )

    const headerElement = screen.getByTestId('header')
   
    expect(headerElement).toBeInTheDocument()
    expect(screen.getByText(/Loading.../)).toBeInTheDocument()
    await waitForElementToBeRemoved(() => screen.getByText(/Loading.../), { timeout: 1500 })
    expect(screen.getByTestId('listItems')).toBeInTheDocument()
  })
})