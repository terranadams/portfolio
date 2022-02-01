import React, { useState } from "react";
import { Card} from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const product = props.product;

  let size = { width: "200px", height: "200px" };

  switch (product.id) {
    case 1:
      size = { width: "350px", height: "200px" };
      break;
    case 2:
      size = { width: "350px", height: "200px" };
      break;
    case 3:
      size = { width: "350px", height: "200px" };
      break;
    case 4:
      size = { width: "150px", height: "180px" };
      break;
    case 5:
      size = { width: "150px", height: "180px" };
      break;
    case 6:
      size = { width: "180px", height: "280px" };
      break;
    case 7:
      size = { width: "180px", height: "280px" };
      break;
    case 8:
      size = { width: "145px", height: "260px" };
      break;
    case 9:
      size = { width: "180px", height: "280px" };
      break;
    case 10:
      size = { width: "200px", height: "150px" };
      break;
    case 11:
      size = { width: "250px", height: "200px" };
      break;
    case 12:
      size = { width: "220px", height: "150px" };
      break;
    case 13:
      size = { width: "220px", height: "200px" };
      break;
    case 14:
      size = { width: "130px", height: "210px" };
      break;
    case 15:
      size = { width: "150px", height: "240px" };
      break;
    case 16:
      size = { width: "150px", height: "200px" };
      break;
    case 17:
      size = { width: "150px", height: "200px" };
      break;
    case 18:
      size = { width: "220px", height: "300px" };
      break;
    case 19:
      size = { width: "200px", height: "300px" };
      break;
    case 20:
      size = { width: "220px", height: "200px" };
      break;
  }
  

  return (
    <Link to={`/eshop/${product.id}`} style={{ textDecoration: "none", color: 'black' }}>
      <div style={{ margin: "30px" }}>
        <h6>{product.title}</h6>
        <p>${product.price}</p>
        <p>{product.id}</p>
        <img src={product.img} width={size.width} height={size.height} />
      </div>
    </Link>
  );
};

export default ProductCard;
