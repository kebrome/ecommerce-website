import React from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../Data/Products";
import { Link } from "react-router-dom";

function Home() {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Wellcome To ShopHub</h1>
        <p className="home-subtitle">
          Discover Amezing Products For Great Price
        </p>
      </div>
      <div className="container">
        <h2 className="Page-title">Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
