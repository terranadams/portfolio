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
    setPokeData(pokemon[0]);
    // console.log(pokemon[0]);
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
          <br></br>
          <br></br>
        </div>
        <Row>
          <Col>
            <p>Normal</p>
            <Image src={pokeData?.sprites?.front_default} width="150" />
          </Col>
          <Col>
            <Image src={pokeData?.sprites?.back_default} width="150" />
          </Col>
          <Col>
            <p>Shiny</p>
            <Image src={pokeData?.sprites?.front_shiny} width="150" />
          </Col>
          <Col>
            <Image src={pokeData?.sprites?.back_shiny} width="150" />
          </Col>
        </Row>

        <div className="text-center">
          <h5>Type(s)</h5>
        </div>

        {/* {console.log(pokeData?.types)}
        {pokeData?.types.map((type) => {
          <p>{type?.type?.name}</p>;
          {
            console.log(type?.type?.name);
          }
        })} */}
      </Container>
    </div>
  );
};

export default PokemonPage;
