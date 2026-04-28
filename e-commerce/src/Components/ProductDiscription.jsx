import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../Data/Products";
import { useNavigate } from "react-router-dom";

function ProductDiscription() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
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
            <button className="btn btn-primary">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDiscription;
