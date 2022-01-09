import './App.css'
import { useState } from 'react'
import Navigation from './Navigation'
import Resume from './Resume'
import Pokedex from './pokedex/Pokedex'
import PokemonPage from './pokedex/PokemonPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ListContext } from './pokedex/contexts/ListContext'

function App() {
  const [pokelist, setPokelist] = useState([])

  return (
    <div className='App'>
      <Navigation />
      
      <ListContext.Provider value={{ pokelist, setPokelist }}>
        <Router>
          <Routes>
            <Route path='/' element={<Resume />} exact />
            <Route path='/pokedex' element={<Pokedex />} exact />
            <Route path='/pokedex/:id' element={<PokemonPage />} exact />
          </Routes>
        </Router>
      </ListContext.Provider>
    </div>
  )
}

export default App
