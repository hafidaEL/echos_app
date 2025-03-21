import '@testing-library/jest-dom'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { ListItems } from './index'
import { AuthContext } from '../../contexts'
import { NEWSLETTER_ITEMS } from '../../mocks/newsletters'
import { USER_WITH_MULTIPLE_SUBSCRIPTION } from '../../mocks/user'

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(NEWSLETTER_ITEMS),
      status: 200,
      ok: true,
    } as unknown as Response)
  )
})

describe('ListItems component', () => {
  it('affiche "Loading..." puis la liste des items groupés par site', async () => {
    const mockUser = USER_WITH_MULTIPLE_SUBSCRIPTION

    render(
      <AuthContext.Provider value={mockUser}>
        <ListItems />
      </AuthContext.Provider>
    )

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
    await waitForElementToBeRemoved(() => screen.getByText(/Loading.../i), { timeout: 1500 })

    const listContainer = screen.getByTestId('listItems')
    expect(listContainer).toBeInTheDocument()

    const uniqueSites = Array.from(new Set(NEWSLETTER_ITEMS.map(item => item.site)))
    uniqueSites.forEach(site => {
      expect(screen.getByText(site)).toBeInTheDocument()
    })
  })
})
