import React from "react";

const CartItemCard = (props) => {
  const item = props.item;

  let size = { width: "200px", height: "200px" };

  switch (item.id) {
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
      size = { width: "150px", height: "200px" };
      break;
    case 15:
      size = { width: "150px", height: "240px" };
      break;
    case 16:
      size = { width: "170px", height: "200px" };
      break;
    case 17:
      size = { width: "170px", height: "200px" };
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
    <div style={{margin: '20px'}}>
      <h6>{item.title}</h6>
      <img src={item.img} width={size.width} height={size.height}></img>
      <p>${item.price}</p>
      
    </div>
  );
};

export default CartItemCard;
