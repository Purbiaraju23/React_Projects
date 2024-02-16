import React from "react";
import { Badge } from "react-bootstrap";
import "../index.css";

function OrderCart({ item, handleAddToCart, handleRemoveFromCart }) {
  return (
    <>
      <div className="ms-2 me-auto fill-cart">
        <div className="fw-bold">
          {item.name} /
          <>
            <img src="../src/assets/rupee.svg" alt="" />
          </>
          {item.price}
        </div>
        <div className="add-remove-group">
          <button
            className="remove-btn"
            onClick={() => handleRemoveFromCart(item)}
          >
            <sup>
              <b>-</b>
            </sup>
          </button>{" "}
          {item.quantity}{" "}
          <button className="add-btn" onClick={() => handleAddToCart(item)}>
            <sup>
              <b>+</b>
            </sup>
          </button>
        </div>
      </div>
      <Badge className="cart-badge" pill>
        {(item.price * item.quantity).toFixed(2)}
      </Badge>
    </>
  );
}

export default OrderCart;
