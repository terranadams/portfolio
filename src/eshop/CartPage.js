import React from "react";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import CartItemCard from "./CartItemCard";

const CartPage = () => {
  const itemsList = useSelector((state) => state.itemsList);
  const itemsTotalPrice = useSelector((state) => state.itemsTotalPrice);
  const dispatch = useDispatch();

  let size = {}

  

  const addItem = (thisItem) => {
    return {
      type: "ADD_ITEM",
      payload: {
        id: thisItem.id,
        title: thisItem.title,
        img: thisItem.img,
        price: thisItem.price,
      },
    };
  };

  const removeItem = (thisItem, index) => {
    return {
      type: "REMOVE_ITEM",
      payload: {
        id: thisItem.id,
        title: thisItem.title,
        img: thisItem.img,
        price: thisItem.price,
        index: index,
      },
    };
  };

  const displayItems = itemsList.map((item, index) => (
    <div key={index}>
      <div style={{margin: '60px'}}>
      <CartItemCard item={item} />
      <p>Quantity of Item: </p>
      <button onClick={() => dispatch(removeItem(item, index))}>-</button>
      <strong> {item.quantity} </strong>
      <button onClick={() => dispatch(addItem(item))}>+</button>
      </div>
    </div>
  ));

  return (
    <div className="whiteBG">
      <Link to="/eshop">
        <Button className="text-start" style={{ margin: "20px" }}>
          Return to Products
        </Button>
      </Link>
      <div className="text-center">
        <h3>Ready to Checkout? </h3>
        <strong>
          Total Checkout Price: $
          {itemsList.length === 0 ? "0" : itemsTotalPrice.toLocaleString(undefined, {maximumFractionDigits:2})}
        </strong>
        <br></br> <br></br>
        <ul>{displayItems}</ul>
      </div>
    </div>
  );
};

export default CartPage;
