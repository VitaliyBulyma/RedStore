import React, { useState, useEffect } from "react";
import { read, listRelated } from "./apiCore";
import Card from "./Card";
import Menu from "../core/Menu";

const Product = (props) => {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);

  const loadSingleProduct = (productId) => {
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        // fetch related products
        listRelated(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data);
          }
        });
      }
    });
  };

  useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, [props]);

  return (
    <>
      <Menu />
      <div className="container">
        
        <div className="row">
          <div className="single">
            {product && product.description && (
              <Card product={product} showViewProductButton={false} />
            )}
          </div>

          <div className="col-4">
            <h4>Description</h4>
{product.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
