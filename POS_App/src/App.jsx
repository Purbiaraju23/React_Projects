import Cart from './components/Cart';
import NavBar from './components/NavBar'
import Product from './components/Product'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { groceryItems } from './productData';


function App() {

  const notify = (product_name) => toast.success(` ${product_name} Added SuccessFully `)

  // const [showToast, setShowToast] = useState(false);
  const [productName,setProductName] = useState('')
  const [cartItems, setCartItems] = useState([])
  
  const handleAddToCart = (product_name) => {
    setProductName(product_name)
    notify(product_name)
    // setShowToast(true);
    // setTimeout(() => {
    //   setShowToast(false);
    // }, 3000);
  };

  

  const addToCart = (product) => {

    handleAddToCart(product.name)

    const existingItem = cartItems.find((item) => item.name === product.name);
  
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1, price: item.price + product.price } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

  };
  
 
  
  
  
  return (
    <>
    <ToastContainer autoClose={3000} theme='light'/>
       <div className="App">
       <NavBar/>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8" style={{padding: '10px'}}>
                  <div className="row">
                    <div className="col-md-2">
                      <Product product={groceryItems[0]} onAddToCart={addToCart}/>
                    </div>
                    <div className="col-md-2">
                      <Product product={groceryItems[1]} onAddToCart={addToCart}/>
                    </div>
                    <div className="col-md-2">
                      <Product product={groceryItems[2]} onAddToCart={addToCart}/>
                    </div>
                    <div className="col-md-2">
                      <Product product={groceryItems[4]} onAddToCart={addToCart}/>
                    </div>
                    <div className="col-md-2">
                      <Product product={groceryItems[5]} onAddToCart={addToCart}/>
                    </div>
                    <div className="col-md-2">
                      <Product product={groceryItems[6]} onAddToCart={addToCart}/>
                    </div>
                    <div className="col-md-2">
                      <Product product={groceryItems[7]} onAddToCart={addToCart}/>
                    </div>
                    <div className="col-md-2">
                      <Product product={groceryItems[8]} onAddToCart={addToCart}/>
                    </div>
                    <div className="col-md-2">
                      <Product product={groceryItems[9]} onAddToCart={addToCart}/>
                    </div>
                    <div className="col-md-2">
                      <Product product={groceryItems[10]} onAddToCart={addToCart}/>
                    </div>
                    
                  </div>
                  
                  

              </div>
              <div className="col-md-4" style={{ padding: '10px' }}>
                {cartItems.length === 0 && (
                  <div>
                    <div role='alert' className='fade alert alert-warning show'>
                      Cart is Empty
                    </div>
                  </div>
                )}
                {cartItems.length > 0 && <Cart cartItems={cartItems}/>}
            </div>
          </div>
          
              {/* <div
                className={`toast position-absolute top-0 end-0 m-3 ${showToast ? 'show' : ''}`}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="toast-header">
                  <strong className="me-auto">{productName}</strong>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                    onClick={() => setShowToast(false)}
                  ></button>
                </div>
              <div className="toast-body">Added to Cart Successfully</div>
              
            </div> */}
            {/* This code is for custom Toast */}
            </div>
       </div>  
    </>
  )
}

export default App



