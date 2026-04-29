import React, { useContext } from "react";
import { CartItemContext } from "../Context/CartContext";
import { getProductById } from "../Data/Products";

function Checkout() {
  const {
    addToCart,
    getCartItemsWithProduct,
    updateQuantity,
    remove,
    clearCard,
    totalAmount,
  } = useContext(CartItemContext);

  const cartItems = getCartItemsWithProduct();

  function handlePlaceOrder() {
    alert("Order placed successfully!");
    clearCard();
  }

  return (
    <>
      <div className="page">
        <div className="container">
          <h1 className="page-title">CheckOut</h1>
          <div className="checkout-container">
            <div className="checkout-items">
              <h2 className="checkout-section-title">Order summary</h2>
              {cartItems.map((item) => (
                <div className="checkout-item" key={item.id}>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="checkout-item-image"
                  />
                  <div className="checkout-item-details">
                    <h3 className="checkout-item-name">{item.product.name}</h3>
                    <p className="checkout-item-price">
                      ${item.product.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="checkout-item-controls">
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <p>${item.product.price * item.quantity}</p>
                    <button
                      className="btn btn-secondary btn-small"
                      onClick={() => remove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="checkout-summary">
              <h2 className="checkout-section-title">Total</h2>
              <div className="checkout-total">
                <p className="checkout-total-lable">
                  subtotal:
                  <p className="checkout-total-value">
                    ${totalAmount().toFixed(2)}
                  </p>
                </p>
              </div>
              <div className="checkout-total">
                <p className="checkout-total-label">Total :</p>
                <p className="checkout-total-value checkout-total-final">
                  ${totalAmount().toFixed(2)}
                </p>
              </div>
              <button
                className="btn btn-primary btn-larg btn-block"
                onClick={handlePlaceOrder}
              >
                place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
