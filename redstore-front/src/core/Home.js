import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Hero from "./Hero";
import { API } from "../config";
import { getProducts } from "./apiCore";
import Card from "./Card";
const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);
  return (
    <div className="header">
      <div className="container">
        <Menu />
        <Hero />
        <div class="categories">
      <div class="small-container">
        <div class="row">
          <div class="col-3">
            <img src="images/category-1.jpg" alt="" />
          </div>
          <div class="col-3">
            <img src="images/category-2.jpg" alt="" />
          </div>
          <div class="col-3">
            <img src="images/category-3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
        <h2 className="title">Featured Product</h2>
        <div className="row">
                    {productsBySell.map((product, i) => (
          <Card key={i} product={product} />
        ))}
        </div>
        <h2 className="title">Latest Products</h2>
        <div className="row">
                    {productsByArrival.map((product, i) => (
          <Card key={i} product={product} />
        ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
