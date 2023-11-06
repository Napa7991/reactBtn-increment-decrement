import React, { useState } from "react";
import ".././App.css";

const Item = (props) => {
  const [state,setState] = useState(1);

  const increment =()=>{
    setState(state+1);
  }

  const decrement = ()=>{
    if(state>0){
      setState(state-1);
    }
  }
  return (
    <>
      <div className="container">
        <div className="Item">
          <h1>Name</h1>
          <p>{props.name}</p>
        </div>
        <div className="Item">
          <h1>Image</h1>
          <p>{props.image}</p>
        </div>
        <div className="Item">
          <h1>Price</h1>
          <p>{props.price}</p>
        </div>
        <div className="Item">
          <h1>Qty</h1>
          <div className="btnController">
            <button onClick={increment}>+</button>
            <p>{state}</p>
            <button onClick={decrement}>-</button>
          </div>
        </div>
        <div className="Item">
          <h1>Total Price</h1>
          <p>{props.totalPrice}</p>
        </div>
      </div>
    </>
  );
};

const Product1 = () => {
  const [state,setState] = useState(5);
  
  
  return (
    <>
      <Item
        name="Lenovo"
        image="image"
        price="12,000"
        qty={state}
        totalPrice="60,000"
      />
    </>
  );
};

export default Product1;
