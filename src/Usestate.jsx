  // Usestate.jsx
  import React, { useState } from 'react';
  import './App.css';

  const Usestate = () => {
    const [value, setValue] = useState(0);

    const increase = () => {
      setValue(value + 1);
    };

    return (
      <>
        <center>
          <h2>Shopping Cart</h2>
          <p>Items in Cart: {value}</p>

          <div className="product-container">
            <div className="product">
              <img
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                alt="Product 1"
                height={150}
                width={150}
              />
              <button onClick={increase}>Add to Cart</button>
            </div>

            <div className="product">
              <img
                src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&h=350"
                alt="Product 2"
                height={150}
                width={150}
              />
              <button onClick={increase}>Add to Cart</button>
            </div>

            <div className="product">
              <img
                src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                alt="Product 3"
                height={150}
                width={150}
              />
              <button onClick={increase}>Add to Cart</button>
            </div>

            <div className="product">
              <img
                src="https://images.pexels.com/photos/1035674/pexels-photo-1035674.jpeg?auto=compress&cs=tinysrgb&h=350"
                alt="Product 4"
                height={150}
                width={150}
              />
              <button onClick={increase}>Add to Cart</button>
            </div>

            <div className="product">
              <img
                src="https://images.pexels.com/photos/1166860/pexels-photo-1166860.jpeg?auto=compress&cs=tinysrgb&h=350"
                alt="Product 5"
                height={150}
                width={150}
              />
              <button onClick={increase}>Add to Cart</button>
            </div>

            <div className="product">
              <img
                src="https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&h=350"
                alt="Product 6"
                height={150}
                width={150}
              />  
              <button onClick={increase}>Add to Cart</button>
            </div>
          </div>
        </center>
      </>
    );
  };

  export default Usestate;
