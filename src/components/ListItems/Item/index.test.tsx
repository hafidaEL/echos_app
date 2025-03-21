import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Item } from './index'

describe('Item component', () => {
  const mockItem = {
    id: '1',
    title: 'Test Title',
    description: 'Test Description',
    image: 'test-image.jpg',
    subscriptions: ['RIGHT1'],
    site:'DEN'
  }

  it('affiche le titre et la description de l’item', () => {
    render(<Item item={mockItem} userSubscriptions={[]} />)
        expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('ne rend pas de bouton si item.subscriptions est vide', () => {
    const itemWithoutSubs = { ...mockItem, subscriptions: [] }
    render(<Item item={itemWithoutSubs} userSubscriptions={[]} />)
    
    const button = screen.queryByRole('button')
    expect(button).not.toBeInTheDocument()
  })

  it('rend un bouton avec le texte "S\'abonner" si l’utilisateur n’est pas abonné', () => {
    render(<Item item={mockItem} userSubscriptions={[]} />)
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("S'abonner")
  })

  it('rend un bouton avec le texte "S\'abonner" si l’utilisateur n’est pas abonné à RIGHT1', () => {
    render(<Item item={mockItem} userSubscriptions={['RIGHT2']} />)
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("S'abonner")
  })

  it('rend un bouton avec le texte "S\'inscrire" si l’utilisateur est abonné', () => {
    render(<Item item={mockItem} userSubscriptions={['RIGHT1']} />)
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("S'inscrire")
  })
})
