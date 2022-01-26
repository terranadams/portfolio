import "bootstrap/dist/css/bootstrap.min.css"; // THIS IS WHAT YOU NEED FOR THE BOOTSTRAP TO WORK
import { useState } from "react";
import Navigation from "./Navigation";
import Home from './Home'
import Pokedex from "./pokedex/Pokedex";
import PokemonPage from "./pokedex/PokemonPage";
import Experience from './Experience'
import Education from "./Education";
import Skills from "./Skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListContext } from "./pokedex/contexts/ListContext";

function App() {
  const [pokelist, setPokelist] = useState([]);

  return (
    <div className="App">

      <ListContext.Provider value={{ pokelist, setPokelist }}>
      <Navigation />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/pokedex" element={<Pokedex />} exact />
            <Route path="/pokedex/:id" element={<PokemonPage />} exact />
            <Route path="/experience" element={<Experience />} exact />
            <Route path="/education" element={<Education />} exact />
            <Route path="/skills" element={<Skills />} exact />
          </Routes>
        </Router>
      </ListContext.Provider>
    </div>
  );
}

export default App;
