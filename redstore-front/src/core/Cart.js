import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCart } from "./cartHelpers";
import Card from "./Card";
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
      // <div>
      //   <h2>Your cart has {`${items.length}`} items</h2>
      //   <hr />
      //   {items.map((product, i) => (
      //     <Card
      //       key={i}
      //       product={product}
      //       showAddToCartButton={false}
      //       cartUpdate={true}
      //       showRemoveProductButton={true}
      //       setRun={setRun}
      //       run={run}
      //     />
      //   ))}
      // </div>
      <>
        {items.map((product, i) => (
          <>
            <tr>
              <td>
                <div class="cart-info">
                  <ShowImage item={product} url="product" />
                  <div>
                    <p>{product.name}</p>
                    <small>Price: {product.price}</small>
                    <br />
                    <a href="">Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number" placeholder={product.count} />
              </td>
              <td>${product.price}</td>
            </tr>
          </>
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
                <th>Subtotal</th>
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
