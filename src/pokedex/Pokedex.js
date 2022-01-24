import React from "react";
import Generate from "./Generate";
import Search from "./Search";
import MainList from "./MainList";
import { useState, useEffect, useContext } from "react";
import { ListContext } from "./contexts/ListContext";
import { Row, Col } from "react-bootstrap";

const Pokedex = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (value) => {
    setLoading(true)
    // event.preventDefault(); // keeps the page from being refreshed by the form submission
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${value}/`
    );
    const newPokemonData = await data.json();
    setLoading(false);
    console.log(newPokemonData)
    // setPokelist([newPokemonData, ...pokelist]);
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

  const { pokelist, setPokelist } = useContext(ListContext);

  return (
    <div className="App">
      <Row>
        <Col className="text-center">
          <Search onSubmit={handleSubmit} />
          or
          <Generate onClick={fetchNewPokemon} />
        </Col>
      </Row>
      {loading ? <h4 className="text-white">Loading...</h4> : ""}
      <MainList pokelist={pokelist} />
    </div>
  );
};

export default Pokedex;
