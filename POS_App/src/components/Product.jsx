import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Product({ product, onAddToCart }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <div
              style={{
                backgroundImage: `url(${product.imageUrl})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "150px",
              }}
            ></div>
            <div className="col-md-12">
              <div className="card-title h5">{product.name}</div>
              <p className="card-text">
                <b>₹ {product.price}</b>
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
