import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { groceryItems } from "./productData.json";

function App() {
  const notify = (product_name) =>
    toast.success(` ${product_name} Added SuccessFully `);

  const [productName, setProductName] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product_name) => {
    setProductName(product_name);
    notify(product_name);
  };

  const addToCart = (product) => {
    handleAddToCart(product.name);

    const existingItem = cartItems.find((item) => item.name === product.name);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.name === product.name
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: item.price + product.price,
              }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} theme="light" />
      <div className="App">
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8" style={{ padding: "10px" }}>
              <div className="row">
                {groceryItems.slice(0, 11).map((item, index) => (
                  <div key={index} className="col-md-2">
                    <Product product={item} onAddToCart={addToCart} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4" style={{ padding: "10px" }}>
              {cartItems.length === 0 && (
                <div>
                  <div role="alert" className="fade alert alert-warning show">
                    Cart is Empty
                  </div>
                </div>
              )}
              {cartItems.length > 0 && <Cart cartItems={cartItems} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
