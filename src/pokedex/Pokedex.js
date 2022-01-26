import React from "react";
import Generate from "./Generate";
import MainList from "./MainList";
import { useState, useEffect, useContext } from "react";
import { ListContext } from "./contexts/ListContext";
import { Row, Col } from "react-bootstrap";

const Pokedex = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
    const { pokelist, setPokelist } = useContext(ListContext);


  const handleSearch = async (value) => {

    try {
      setLoading(true);
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${value}/`
    );
    const newPokemonData = await data.json();
    setLoading(false);
    // console.log(newPokemonData)
    setPokelist([newPokemonData, ...pokelist]);
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  };
  

  const fetchNewPokemon = async () => {
    setLoading(true);
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${
        Math.floor(Math.random() * 932) + 1
      }/`
    );
    const newPokemonData = await data.json();
    setLoading(false);
    // console.log(newPokemonData)
    setPokelist([newPokemonData, ...pokelist]);
  };


  return (
    <div className="App">
      <Row>
        <Col className="text-center">
          <Generate randomButton={fetchNewPokemon} handleSearch={handleSearch}/>
        </Col>
      </Row>
      {loading ? <h4 className="text-white">Loading...</h4> : ""}
      <MainList pokelist={pokelist} />
    </div>
  );
};

export default Pokedex;
