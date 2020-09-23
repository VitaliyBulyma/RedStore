import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "./apiAdmin";
import Menu from '../core/Menu';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    const { user, token } = isAuthenticated();

    const loadProducts = () => {
        getProducts().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
            }
        });
    };

    const destroy = productId => {
        deleteProduct(productId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadProducts();
            }
        });
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return (
<>
<Menu />
            <div className="row">
                <div className="">
                    <h2 className="text-center">
                        Total {products.length} products
                    </h2>
                    <hr />
                    <div className="small-container">
                        {products.map((p, i) => (
                            <div
                                key={i}
                                className="list-group-item dev"
                            >
                                <strong>{p.name}</strong>
                                <strong className="ml-20">${p.price}</strong>
                                <span className="right">
                                <Link to={`/admin/product/update/${p._id}`}>
                                    <span className="ml-20">
                                        Update
                                    </span>
                                </Link>
                                <span
                                    onClick={() => destroy(p._id)}
                                    className="ml-20 nostyle"
                                >
                                    Delete
                                </span>
                                </span>
                            </div>
                        ))}
                    </div>
                    <br />
                </div>
            </div>
</>
    );
};

export default ManageProducts;
