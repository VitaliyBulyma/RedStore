import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCart , addItem, updateItem, removeItem} from "./cartHelpers";
import CartItem from "./Cart-item";
import Checkout from "./Checkout";
import Menu from "./Menu";
import ShowImage from "./ShowImage";


const Cart = () => {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);
  

  useEffect(() => {
    setItems(getCart());
  }, [run]);

  const showItems = (items) => {
  
    return (
    <>
      
        {items.map((product, i) => (
          <CartItem
            key={i}
            product={product}         
            
            setRun={setRun}
            run={run}
          />
        ))}
       
       
      </>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
    </h2>
  );

  return (
    <>
      <Menu />
      <div className="container">
        <div className="small-container cart-page">
          <h2>Your cart has {`${items.length}`} items</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {items.length > 0 ? showItems(items) : noItemsMessage()}
            </tbody>
          </table>
          <div className="total-price">
            <Checkout products={items} setRun={setRun} run={run} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
