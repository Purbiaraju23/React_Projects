import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Popover } from "react-bootstrap";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import Toasts from "./components/Toasts";
import { groceryItems } from "./productData.json";
import { TypeContextProvider } from "./contexts/TypeContext";
import "./index.css";

function App() {
  const [localCartItems, setLocalCartItems] = useState(
    JSON.parse(window.localStorage.getItem("cartItems")) || []
  );
  const [cartLocalTotal, setCartLocalTotal] = useState(
    parseInt(window.localStorage.getItem("cartTotal")) || 0
  );
  const [cartItems, setCartItems] = useState(localCartItems);
  const [productType, setProductType] = useState("all");
  const [sortedItems, setSortedItems] = useState([...groceryItems]);
  const [toastsList, setToastsList] = useState([]);
  const ORIGINAL = [...groceryItems];

  const [total, setTotal] = useState(cartLocalTotal);
  const [sortDirection, setSortDirection] = useState({
    name: "asc",
    price: "asc",
    category: "asc",
  });

  const addToCart = (item) => {
    setTotal((t) => t + item.price);
    const isExisting = cartItems.find((it) => it.name === item.name);
    if (isExisting) {
      const updatedItems = cartItems.map((i) =>
        i.id !== item.id ? i : { ...i, quantity: i.quantity + 1 }
      );
      setCartItems(updatedItems);
    } else {
      setCartItems((items) => [...items, { ...item, quantity: 1 }]);
    }

    setToastsList((toasts) => [
      ...toasts,
      { title: item.name, action: "Added" },
    ]);
    setTimeout(() => {
      setToastsList((prev) => prev.slice(1));
    }, 3000);
  };

  const removeFromCart = (item) => {
    setTotal((total) => total - item.price);

    const updatedItems = cartItems
      .map((i) => (i.id !== item.id ? i : { ...i, quantity: i.quantity - 1 }))
      .filter((i) => i.quantity !== 0);
    setCartItems(updatedItems);

    setToastsList((toasts) => [
      ...toasts,
      { title: item.name, action: "Removed" },
    ]);
    setTimeout(() => {
      setToastsList((prev) => prev.slice(1));
    }, 3000);
  };

  const sortItems = (option) => {
    let sortedItemsCopy = [...sortedItems];
    const direction = sortDirection[option] === "asc" ? "desc" : "asc";
    setSortDirection((prevDirection) => ({
      ...prevDirection,
      [option]: direction,
    }));

    if (option === "name") {
      sortedItemsCopy.sort((a, b) =>
        direction === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
    } else if (option === "price") {
      sortedItemsCopy.sort((a, b) =>
        direction === "asc" ? a.price - b.price : b.price - a.price
      );
    } else if (option === "category") {
      sortedItemsCopy.sort((a, b) =>
        direction === "asc"
          ? a.type.localeCompare(b.type)
          : b.type.localeCompare(a.type)
      );
    } else if (option === "clear") {
      sortedItemsCopy = ORIGINAL;
    }

    setSortedItems(sortedItemsCopy);
  };

  const handleSortChange = (selectedOption) => {
    sortItems(selectedOption);
  };

  const setType = (type) => {
    setProductType(type);
  };

  const cartPopOver = (
    <Popover id="popover-positioned-bottom" title="My Cart" className="popover">
      <h5>Cart</h5>
      <Cart
        cartItems={cartItems}
        total={total}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </Popover>
  );

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    const storedLocalTotal = localStorage.getItem("cartTotal");

    if (storedCartItems) {
      setLocalCartItems(JSON.parse(storedCartItems));
    }
    if (storedLocalTotal) {
      setCartLocalTotal(parseInt(storedLocalTotal));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartTotal", JSON.stringify(total));
  }, [cartItems, total]);

  return (
    <TypeContextProvider value={{ setType, productType }}>
      <div className="App">
        <NavBar
          setproductType={setType}
          onSortSelect={handleSortChange}
          cartHover={cartPopOver}
          items={cartItems}
          sortDirection={sortDirection}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 p-3">
              <div className="row row-cols-1 row-cols-md-4 g-4">
                {productType === "all"
                  ? sortedItems.map((item, index) => (
                      <div key={index} className="col">
                        <Product product={item} onAddToCart={addToCart} />
                      </div>
                    ))
                  : sortedItems
                      .filter((item) => item.type === productType)
                      .map((item, index) => (
                        <div key={index} className="col">
                          <Product product={item} onAddToCart={addToCart} />
                        </div>
                      ))}
              </div>
            </div>
            <div className="col-md-4 p-3">
              <Cart
                cartItems={cartItems}
                addToCart={addToCart}
                total={total}
                removeFromCart={removeFromCart}
              />
            </div>
          </div>
        </div>
        <div className="toast-container position-absolute bottom-0 end-0">
          {toastsList.map((toast, i) => (
            <Toasts Title={toast.title} key={i} Action={toast.action} />
          ))}
        </div>
      </div>
    </TypeContextProvider>
  );
}

export default App;
