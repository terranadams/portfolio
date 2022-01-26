import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Col, Row, Container, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ListContext } from "./contexts/ListContext";

const PokemonPage = () => {
  const [pokeData, setPokeData] = useState({});
  const { pokelist } = useContext(ListContext);

  let { id } = useParams(); // the new and improved way of getting parameters.
  useEffect(() => {
    // console.log(id)
    // console.log(pokelist)
    const pokemon = pokelist.filter((x) => x.id == id);
    // console.log(pokemon)
    setPokeData(pokemon[0]);
  }, []);

  return (
    <div>
      <Link to="/pokedex" className="m-4" variant="success">
        <Button className="m-3">Return</Button>
      </Link>
      <Container>
        <div className="text-center">
          <h3 className="m-6">
            {pokeData?.name?.charAt(0)?.toUpperCase() +
              pokeData?.name?.slice(1)}
          </h3>
          <br></br><br></br>
        </div>

        <Row>
          <Col>
            <h5>Normal</h5>
            <Image src={pokeData?.sprites?.front_default} width="150" />
          </Col>
          <Col>
            <Image src={pokeData?.sprites?.back_default} width="150" />
          </Col>
          <Col>
            <h5>Shiny</h5>
            <Image src={pokeData?.sprites?.front_shiny} width="150" />
          </Col>
          <Col>
            <Image src={pokeData?.sprites?.back_shiny} width="150" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PokemonPage;
