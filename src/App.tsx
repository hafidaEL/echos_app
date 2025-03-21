import { useContext } from 'react'
import './App.css'
import { AuthContext } from './contexts'
import { Header } from './components/Header'
import { ListItems } from './components/ListItems'

function App() {
  const currentUser = useContext(AuthContext)
 
  return (
    <>
      <AuthContext.Provider value={currentUser}>  
        <Header />
        <ListItems />
      </AuthContext.Provider>
    </>
  )
}

export default App
