import React, { useState, useEffect } from "react";
import "./productList.css";
import { ProductItem } from "./ProductItem";
import { Link, useLocation } from "react-router-dom";
import { Card } from "../Card/Card";
import authImage from "../../assets/product-auth.png"
import axios from "axios";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
      
        const response = await axios.get("/getProducts", {
          params: {
            isGenoma: true,
          },
        });

        setProducts(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <>
      <div className="product-auth">
        <h1>Product Authenticate</h1>
        <h6>Click on image to redirect</h6>
        <Link to={"/auth"}>
          <img src={authImage} className="card-img-top" alt="calidad" style={{ height: "250px", width: "250px"}} />
        </Link>
      </div>
      </>
      <div className="products-page">
        <h1>Products</h1>
        <div className="product-list d-flex flex-wrap justify-content-around">
          {products.slice(0, 4).map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
      <>
        <div style={{ marginTop: "2rem" }}>
          <Link to={"/product"} className="button-style">
            Explore more products
          </Link>
        </div>
        <Card></Card>
      </>
    </>
  );
};
