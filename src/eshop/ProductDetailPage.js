import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Row, Col, ListGroup} from "react-bootstrap";

// category
// description
// id
// img
// price
// rating
// title

const ProductDetailPage = () => {
  let { id } = useParams(); // the new and improved way of getting parameters.

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const data = await fetch(
      `https://my-json-server.typicode.com/tdmichaelis/json-api/products/${id}`
    );
    const item = await data.json();
    setProduct(item);
  };

  let size = { width: "200px", height: "200px" };

  switch (product.id) {
    case 1:
      size = { width: "450px", height: "300px" };
      break;
    case 2:
      size = { width: "450px", height: "300px" };
      break;
    case 3:
      size = { width: "450px", height: "300px" };
      break;
    case 4:
      size = { width: "300px", height: "360px" };
      break;
    case 5:
      size = { width: "300px", height: "360px" };
      break;
    case 6:
      size = { width: "360px", height: "560px" };
      break;
    case 7:
      size = { width: "360px", height: "560px" };
      break;
    case 8:
      size = { width: "290px", height: "520px" };
      break;
    case 9:
      size = { width: "360px", height: "560px" };
      break;
    case 10:
      size = { width: "400px", height: "300px" };
      break;
    case 11:
      size = { width: "500px", height: "400px" };
      break;
    case 12:
      size = { width: "440px", height: "300px" };
      break;
    case 13:
      size = { width: "440px", height: "400px" };
      break;
    case 14:
      size = { width: "300px", height: "400px" };
      break;
    case 15:
      size = { width: "300px", height: "480px" };
      break;
    case 16:
      size = { width: "340px", height: "400px" };
      break;
    case 17:
      size = { width: "340px", height: "400px" };
      break;
    case 18:
      size = { width: "440px", height: "600px" };
      break;
    case 19:
      size = { width: "400px", height: "600px" };
      break;
    case 20:
      size = { width: "440px", height: "400px" };
      break;
  }

  return (
    <div className="whiteBG">
      <Link to="/eshop">
        <Button style={{ margin: "20px" }}>Return to Products</Button>
      </Link>

      <Row>
        <Col md={6} className="text-center">
        <img style={{margin: '30px'}} src={product.img} width={size.width} height={size.height} />
        </Col>
        <Col md={6}>
          <ListGroup style={{margin: '60px'}}>
          <ListGroup.Item>
            <h3>{product.title}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>{product.description}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="row">
            <i style={{padding: '10px'}}>${product.price}</i>
            <button className="btn btn-success">Add to Cart</button>
            </div>
          </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
   
    <br></br>
      {/* <div className="text-center">
        <h3 style={{ margin: "40px" }}>{product.title}</h3>
        <img src={product.img} width={size.width} height={size.height} />
        <br></br><br></br>
        <h4>${product.price}</h4>
        <Button>Add to Cart</Button>
        <br></br>
        <br></br>
      </div> */}
    </div>
  );
};

export default ProductDetailPage;
