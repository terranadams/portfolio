import logo from './logo.svg'
import './App.css'
import Navigation from './Navigation'
import Resume from './Resume'
import Pokedex from './pokedex/Pokedex'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      {/* <Navigation /> */}
      <Routes>
        <Route path='/' element={<Resume />} exact />
        <Route path='/pokedex' element={<Pokedex />} exact />
      </Routes>
    </div>
  )
}

export default App
