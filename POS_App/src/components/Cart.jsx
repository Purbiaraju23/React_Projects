import React from 'react';

function Cart({ cartItems }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <ol className='list-group'>
        {cartItems.map((item, index) => (
        <li key={index} className="d-flex justify-content-between align-items-center list-group-item">
          <div className="rounded-pill bg-white"> { index + 1 }. </div>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.name}</div>
            ₹ {item.price / item.quantity} x {item.quantity}
          </div>
          <span variant="primary" className="badge rounded-pill bg-primary">
            ₹ {item.price}
          </span>
        </li>
        ))}

  <li className="d-flex justify-content-between align-items-center list-group-item">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Net Total</div>
    </div>
    <span variant="primary" className="badge rounded-pill bg-primary">
      ₹ {calculateTotal()}
    </span>
  </li>
</ol>

    </div>
  );
}

export default Cart;
