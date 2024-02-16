import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

function Product({ product, onAddToCart }) {
  const { name, id, imageUrl, price } = product;

  return (
    <div className="card" key={id}>
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <img src={imageUrl} alt="Product Image" className="product-image" />

            <div className="col-md-12">
              <div className="card-title h5">{name}</div>
              <p className="card-text">
                <b>₹ {price}</b>
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onAddToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
