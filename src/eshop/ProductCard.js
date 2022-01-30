import React, { useState} from "react";
import { Card, Link } from "react-bootstrap";

const ProductCard = (props) => {
  const product = props.product;


    let size = {width: '200px', height: '200px'}

//    if (product.id == 1) size = {width: '350px', height: '200px'}


    switch (product.id) {
        case 1: size = {width: '350px', height: '200px'}; break;
        case 2: size = {width: '350px', height: '200px'}; break;
        case 3: size = {width: '350px', height: '200px'}; break;
        case 4: size = {width: '150px', height: '180px'}; break;
        case 5: size = {width: '150px', height: '180px'}; break;
        case 6: size = {width: '180px', height: '280px'}; break;
        case 7: size = {width: '180px', height: '280px'}; break;
        case 8: size = {width: '145px', height: '260px'}; break;
        case 9: size = {width: '180px', height: '280px'}; break;
        case 10: size = {width: '200px', height: '150px'}; break;
        case 11: size = {width: '250px', height: '200px'}; break;
        case 12: size = {width: '220px', height: '150px'}; break;
        case 13: size = {width: '220px', height: '200px'}; break;
        case 14: size = {width: '170px', height: '200px'}; break;
        case 15: size = {width: '150px', height: '240px'}; break;
        case 16: size = {width: '170px', height: '200px'}; break;
        case 17: size = {width: '170px', height: '200px'}; break;
        case 18: size = {width: '220px', height: '300px'}; break;
        case 19: size = {width: '200px', height: '300px'}; break;
        case 20: size = {width: '220px', height: '200px'}; break;
    }

  return (
    <div style={{margin: '30px'}}>
      <h6>{product.title}</h6>
      <p>{product.id}</p>
      <img src={product.img} width={size.width} height={size.height} />
    </div>
    // // <Link to ={`/pokedex/${pokemon.id}`} style={{textDecoration: 'none'}}>
    //   <Card key={product.id} className='bg-secondary' style={{width: '220px', height: '280px'}}>
    //     <Card.Img
    //       variant='top'
    //       width={width}
    //       src={product.img}
    //     />
    //     <Card.Body>
    //       <Card.Title style={{color: 'black'}} className='text-center'>
    //         {product.title}
    //       </Card.Title>
    //       {/* <Card.Text></Card.Text> */}
    //     </Card.Body>
    //   </Card>
    // //   </Link>
  );
};

export default ProductCard;
