import { useState, createContext } from "react";
// import products from "../data/products";
import { getProductById, getProducts } from "../data/products";
import { useNavigate } from "react-router-dom";
export const CartItemContext = createContext(null);

function CartContext({ children }) {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  function addToCart(productId) {
    const Existing = cartItems.find((p) => p.id === productId);
    if (Existing) {
      const current = Existing.quantity;
      const updatedItem = cartItems.map((item) =>
        item.id === productId ? { id: productId, quantity: current + 1 } : item,
      );

      setCartItems([...cartItems, updatedItem]);
      // setCartItems(updatedItem);
    } else {
      setCartItems([
        ...cartItems,
        {
          id: productId,
          quantity: 1,
        },
      ]);
    }
    navigate("/checkout");
  }
  function getCartItemsWithProduct() {
    return cartItems
      .map((item) => ({
        ...item,
        product: getProductById(item.id),
      }))
      .filter((item) => item.product);
  }
  function remove(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }
  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      remove(productId);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  }
  function totalAmount() {
    const total = cartItems.reduce((total, item) => {
      const product = getProductById(item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
    return total;
  }
  function clearCard() {
    setCartItems([]);
  }

  return (
    <>
      <CartItemContext.Provider
        value={{
          cartItems,
          addToCart,
          getCartItemsWithProduct,
          updateQuantity,
          remove,
          clearCard,
          totalAmount,
        }}
      >
        {children}
      </CartItemContext.Provider>
    </>
  );
}

export default CartContext;
