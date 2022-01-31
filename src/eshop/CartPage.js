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
      <p></p>
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
    <div className='whiteBG text-center'>
      <Link to="/eshop">
        <Button style={{ margin: "20px" }}>Return to Products</Button>
      </Link>
      <h1>Cart Page</h1>
      <strong>
        Total Checkout Price: $
        {itemsList.length === 0 ? "0" : itemsTotalPrice.toFixed(2)}
      </strong>
      <ul>{displayItems}</ul>
    </div>
  );
};

export default CartPage;
