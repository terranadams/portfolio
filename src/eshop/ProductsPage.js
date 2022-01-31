import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { Link } from 'react-router-dom'

const ProductsPage = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      `https://my-json-server.typicode.com/tdmichaelis/json-api/products`
    );
    const items = await data.json();
    setItems(items);
    setCurrentItems(items);
    // console.log(items);
  };

  const onCategoryChange = (value) => {
    // This is the change handler for the filter
    if (value === "all") {
      setCurrentItems(items);
    } else {
      let filteredItems = items.filter((item) => item.category === value);
      setCurrentItems(filteredItems);
    }
  };

  return (
    <div className="text-center whiteBG">
      <Link to="/eshop/cart">
        <Button style={{ margin: "20px" }}>Go to Cart</Button>
      </Link>
      <h1 style={{ padding: "10px" }}>EShop :)</h1>
      <br></br>
      <select
        name="categories"
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="all">All Items</option>
        <option value="headphones">Headphones</option>
        <option value="phone">Phone</option>
        <option value="tv">Television</option>
        <option value="small-appliance">Small Appliance</option>
        <option value="refrigerator">Refrigerator</option>
        <option value="watch">Watch</option>
        <option value="action-camera">Action-Camera</option>
      </select>
      <br></br>
      <br></br>
      <Row>
        {currentItems.map((item) => (
          <Col key={item.id} className="text-center">
            <ProductCard product={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductsPage;
