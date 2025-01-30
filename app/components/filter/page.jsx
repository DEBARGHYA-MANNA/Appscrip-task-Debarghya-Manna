"use client";
import React, { useState, useEffect } from "react";
import "./filter.css";

const FilterSidebar = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("Recommended");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setDisplayedProducts(data);
    };

    fetchData();
  }, []);

  const handleSort = (option) => {
    let sortedProducts = [...products];

    if (option === "Newest First") {
      sortedProducts.sort((a, b) => b.id - a.id);
    } else if (option === "Popular") {
      sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    } else if (option === "Price: Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "Price: High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setDisplayedProducts(sortedProducts);
    setSortOption(option);
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-header">
        <div>
          <span>{products.length} ITEMS</span>
          <button
            className="toggle-filter-button"
            onClick={() => setIsFiltersVisible((prev) => !prev)}
          >
            {isFiltersVisible ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>
        <div className="sort-dropdown">
          <button className="sort-button">{sortOption} ▼</button>
          <div className="sort-options">
            <div onClick={() => handleSort("Recommended")}>Recommended</div>
            <div onClick={() => handleSort("Newest First")}>Newest First</div>
            <div onClick={() => handleSort("Popular")}>Popular</div>
            <div onClick={() => handleSort("Price: Low to High")}>
              Price: Low to High
            </div>
            <div onClick={() => handleSort("Price: High to Low")}>
              Price: High to Low
            </div>
          </div>
        </div>
      </div>

      {isFiltersVisible && (
        <div></div>
      )}

      <div className="product-list">
        {displayedProducts.map((product) => (
          <div key={product.id} className="product-item">
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating.rate} / 5</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
