import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartItemContext } from "../Context/CartContext";

function ProductCard({ product }) {
  const { cartItems, addToCart } = useContext(CartItemContext);

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-card-image"
      />
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price.toFixed(2)}</p>
      </div>
      <div className="product-card-actions">
        <Link className="btn btn-secondary" to={`/products/${product.id}`}>
          View details
        </Link>
        <button
          className="btn btn-primary"
          onClick={() => addToCart(product.id)}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
