import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Col, Row, Container, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ListContext } from "./ListContext";

const PokemonPage = () => {
  const [pokeData, setPokeData] = useState({});
  const [details, setDetails] = useState("");
  const { pokelist } = useContext(ListContext);
  const [types, setTypes] = useState([]);

  let { id } = useParams(); // the new and improved way of getting parameters.
  useEffect(() => {
    const pokemon = pokelist.filter((x) => x.id == id);
    setPokeData(pokemon[0]);
    console.log(pokemon[0]);
    setTypes(pokemon[0].types.map((x) => x.type.name));
    // console.log(pokemon[0].types.map((x) => x.type.name))

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.flavor_text_entries[0].language.name == 'en') {
        setDetails(data.flavor_text_entries[0].flavor_text);
        }
      });
  }, []);

  return (
    <div className="whiteText">
      <Link to="/pokedex" className="m-4" variant="success">
        <Button className="m-3">Return</Button>
      </Link>
      <div className="text-center">
        <h3 className="m-6 whiteText">
          <strong>
            {pokeData?.name?.charAt(0)?.toUpperCase() +
              pokeData?.name?.slice(1)}
          </strong>
        </h3>
        <br></br>
        <Row>
          {types.map((type, index) => (
            <span className="text-center" key={index}>
              {type.charAt(0)?.toUpperCase() + type.slice(1)}
            </span>
          ))}
        </Row>
        <br></br>
        <Row>
          <div className="text-center">{details}</div>
        </Row>
        <br></br>
        <br></br>
      </div>
      <Row>
        <Col>
          {/* <p style={{ marginLeft: "20px" }}>Normal</p> */}
          <Image src={pokeData?.sprites?.front_default} width="250" />
        </Col>
        <Col>
          <Image src={pokeData?.sprites?.back_default} width="250" />
        </Col>
        <Col>
          {/* <p style={{ marginLeft: "20px" }}>Shiny</p> */}
          <Image src={pokeData?.sprites?.front_shiny} width="250" />
        </Col>
        <Col>
          <Image src={pokeData?.sprites?.back_shiny} width="250" />
        </Col>
      </Row>
    </div>
  );
};

export default PokemonPage;
