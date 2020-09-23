import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import Brands from "./Brands";
import Offer from "./Offer";

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
    <>
    <div className="header">
      <div className="container">
        <Menu />
        <Hero />
</div>
</div>
<div className="small-container">
        <div className="categories">
          
            <div className="row">
              <div className="col-3">
                <img src="images/category-1.jpg" alt="" />
              </div>
              <div className="col-3">
                <img src="images/category-2.jpg" alt="" />
              </div>
              <div className="col-3">
                <img src="images/category-3.jpg" alt="" />
              </div>
            </div>
          </div>
        
        <h2 className="title" id="featured">
          Featured Product
        </h2>
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
        <Offer />
        <Testimonials />
        <Brands/>
      </>
    
  );
};

export default Home;
