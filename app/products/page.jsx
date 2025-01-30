"use client";
import React, { useEffect, useState } from "react";
import "./products.css";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);

  const defaultFilters = {
    customizable: false,
    idealFor: "All",
    occasion: "All",
    work: "All",
    fabric: "All",
    segment: "All",
    suitableFor: "All",
    rawMaterials: "All",
    pattern: "All",
  };

  const [filters, setFilters] = useState(defaultFilters);
  const [sortOption, setSortOption] = useState("Recommended");
  const [openSections, setOpenSections] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const filterOptions = {
    idealFor: ["All", "Men", "Women", "Kids"],
    occasion: ["All", "Casual", "Formal", "Party"],
    work: ["All", "Embroidered", "Printed", "Plain"],
    fabric: ["All", "Cotton", "Silk", "Wool"],
    segment: ["All", "Luxury", "Standard", "Economy"],
    suitableFor: ["All", "Summer", "Winter", "All Seasons"],
    rawMaterials: ["All", "Natural", "Synthetic", "Blended"],
    pattern: ["All", "Striped", "Checked", "Floral"],
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    let updatedProducts = products.filter((product) => {
      return (
        (filters.idealFor === "All" || product.category === filters.idealFor) &&
        (filters.occasion === "All" || product.category === filters.occasion)
      );
    });

    setFilteredProducts(updatedProducts);
  }, [filters, products]);

  const handleSort = (option) => {
    let sortedProducts = [...filteredProducts];

    if (option === "Newest First") {
      sortedProducts.sort((a, b) => b.id - a.id);
    } else if (option === "Popular") {
      sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    } else if (option === "Price: Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "Price: High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
    setSortOption(option);
  };

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleCheckboxChange = () => {
    setFilters((prevState) => ({
      ...prevState,
      customizable: !prevState.customizable,
    }));
  };

  const handleDropdownChange = (section, value) => {
    setFilters((prevState) => ({
      ...prevState,
      [section]: value,
    }));
  };

  const handleResetFilters = () => {
    setFilters(defaultFilters);
  };

  const toggleFilterVisibility = () => {
    setIsFiltersVisible((prev) => !prev);
  };

  return (
    <div className="filter-products-container">
      <div className={`filter-sidebar ${isFiltersVisible ? "show" : "hide"}`}>
        <div className="filter-header">
          <p>{filteredProducts.length} ITEMS</p>
          <div className="filter-buttons">
            <p className="filter-button" onClick={toggleFilterVisibility}>
              {isFiltersVisible ? "HIDE FILTER" : "SHOW FILTER"}
            </p>
            <p onClick={handleResetFilters} className="reset-button">
              RESET
            </p>
          </div>
        </div>

        {isFiltersVisible && (
          <>
            <div className="filter-item">
              <label>
                <input
                  type="checkbox"
                  checked={filters.customizable}
                  onChange={handleCheckboxChange}
                />
                Customizable
              </label>
            </div>

            {Object.keys(filterOptions).map((sectionKey) => (
              <div key={sectionKey} className="filter-item">
                <div
                  className="filter-section-header"
                  onClick={() => toggleSection(sectionKey)}
                >
                  {sectionKey.replace(/([A-Z])/g, " $1").toUpperCase()}
                  <span>
                    {openSections[sectionKey] ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </div>

                {openSections[sectionKey] && (
                  <div className="filter-dropdown">
                    <select
                      value={filters[sectionKey]}
                      onChange={(e) =>
                        handleDropdownChange(sectionKey, e.target.value)
                      }
                    >
                      {filterOptions[sectionKey].map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>

      {!isFiltersVisible && <div className="overlay"></div>}

      <div
        className={`products-container ${
          isFiltersVisible ? "filter-visible" : ""
        }`}
      >
        <div className="sort-container">
          <div className="sort-dropdown">
            <span>Sort By:</span>
            <select
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="Recommended">Recommended</option>
              <option value="Newest First">Newest First</option>
              <option value="Popular">Popular</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="products">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>
                <Link href="/signin">Sign in</Link> or Create an account to see
                pricing
              </p>
              <div className="product-bottom">
                <h3>${product.price}</h3>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
