import React from "react";
import ProductCard from "./ProductCard";
import CartActions from './CartActions'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const CartPage = () => {
  const itemsList = useSelector((state) => state.itemsList);
  const itemsTotalPrice = useSelector((state) => state.itemsTotalPrice);
  const dispatch = useDispatch()

  // switch (product.id) {
  //   case 1:
  //     size = { width: "350px", height: "200px" };
  //     break;
  //   case 2:
  //     size = { width: "350px", height: "200px" };
  //     break;
  //   case 3:
  //     size = { width: "350px", height: "200px" };
  //     break;
  //   case 4:
  //     size = { width: "150px", height: "180px" };
  //     break;
  //   case 5:
  //     size = { width: "150px", height: "180px" };
  //     break;
  //   case 6:
  //     size = { width: "180px", height: "280px" };
  //     break;
  //   case 7:
  //     size = { width: "180px", height: "280px" };
  //     break;
  //   case 8:
  //     size = { width: "145px", height: "260px" };
  //     break;
  //   case 9:
  //     size = { width: "180px", height: "280px" };
  //     break;
  //   case 10:
  //     size = { width: "200px", height: "150px" };
  //     break;
  //   case 11:
  //     size = { width: "250px", height: "200px" };
  //     break;
  //   case 12:
  //     size = { width: "220px", height: "150px" };
  //     break;
  //   case 13:
  //     size = { width: "220px", height: "200px" };
  //     break;
  //   case 14:
  //     size = { width: "150px", height: "200px" };
  //     break;
  //   case 15:
  //     size = { width: "150px", height: "240px" };
  //     break;
  //   case 16:
  //     size = { width: "170px", height: "200px" };
  //     break;
  //   case 17:
  //     size = { width: "170px", height: "200px" };
  //     break;
  //   case 18:
  //     size = { width: "220px", height: "300px" };
  //     break;
  //   case 19:
  //     size = { width: "200px", height: "300px" };
  //     break;
  //   case 20:
  //     size = { width: "220px", height: "200px" };
  //     break;
  // }

  const addItem = (thisItem) => {
    return {
        type: 'ADD_ITEM',
        payload: {
            title: thisItem.title,
            img: thisItem.img,
            price: thisItem.price
        }
    }
}

const removeItem = (thisItem, index) => {
    return {
        type: 'REMOVE_ITEM',
        payload: {
            title: thisItem.title,
            img: thisItem.img,
            price: thisItem.price,
            index: index
        }
    }
}


  const displayItems = itemsList.map((item, index) => (
    <div key={index}>
      {item.title}
      <img src={item.img}></img>
      <p>${item.price}</p>
      {/* <CartActions product={item} index={index} /> */}
      <p>Quantity of Item: </p>
            <button onClick={() => dispatch(removeItem(item, index))}>-</button>
            <strong> {item.quantity} </strong>
            <button onClick={() => dispatch(addItem(item))}>+</button>
      {console.log(item)}
      <p></p>
    </div>
  ));

  return (
    <div className='whiteBG'>
      <Link to="/eshop">
        <Button className="text-start" style={{ margin: "20px" }}>Return to Products</Button>
      </Link>
      <div className="text-center">
      <h1>Cart Page</h1>
      <strong>
        Total Checkout Price: $
        {itemsList.length === 0 ? "0" : itemsTotalPrice.toFixed(2)}
      </strong>
      <ul>{displayItems}</ul>
    </div>
    </div>
  );
};

export default CartPage;
