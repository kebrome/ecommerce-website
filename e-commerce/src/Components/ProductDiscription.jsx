import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../Data/Products";
import { useNavigate } from "react-router-dom";
import { CartItemContext } from "../Context/CartContext";

function ProductDiscription() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, cartItems } = useContext(CartItemContext);

  useEffect(() => {
    const currentProduct = getProductById(id);
    if (!currentProduct) {
      navigate("/");
      return;
    }
    setProduct(() => currentProduct);
  }, [id]);

  if (!product) {
    return <div className="loader"></div>;
  }
  // const ProductIncart = cartItems.find((item) => item.id === product.id);
  // const ProductQuantity = ProductIncart ? `(${ProductIncart.quantity})` : "";

  return (
    //
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product?.image} alt={product?.name} />
          </div>
          <div className="product-detail-content">
            <h1 className="prduct-detail-name">{product?.name}</h1>
            <p className="product-detail-price">${product?.price.toFixed(2)}</p>
            <p className="product-detail-description">{product?.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product.id)}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDiscription;
