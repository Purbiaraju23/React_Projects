import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import OrderCart from "./OrderCart";
import { useEffect } from "react";

export const Cart = ({ cartItems, total, addToCart, removeFromCart }) => {
  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const getCartFromLocalStorage = () => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  };

  useEffect(() => {
    saveCartToLocalStorage(cartItems);
  }, [cartItems]);

  useEffect(() => {
    cartItems = getCartFromLocalStorage();
  }, []);

  return (
    <>
      {cartItems.length !== 0 ? (
        <>
          <ListGroup as="ol" numbered>
            {cartItems.map((item, i) => (
              <ListGroup.Item
                key={i}
                as="li"
                className="d-flex justify-content-between align-items-center"
              >
                <OrderCart
                  item={item}
                  handleAddToCart={addToCart}
                  handleRemoveFromCart={removeFromCart}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
          <ListGroup>
            <ListGroup.Item className="d-flex justify-content-between align-items-center total">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Net Total</div>
              </div>
              <Badge className="cart-badge">{total.toFixed(2)}</Badge>
            </ListGroup.Item>
          </ListGroup>
        </>
      ) : (
        <div>
          <div role="alert" className="fade alert alert-warning show">
            Cart is Empty
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
