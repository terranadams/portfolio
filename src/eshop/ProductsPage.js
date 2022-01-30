import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

// category
// description
// id
// img
// price
// rating
// title

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
    console.log(items);
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
  <div>
    {items.map((item) => (
    //   <ProductCard product={item} />
    <h3>{item.title}</h3>
    ))}
  </div>
  )
};

export default ProductsPage;
