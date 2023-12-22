import React from "react";
import { useLocation } from "react-router-dom";
import "./ProductsDetail.css";
import { BackButtonProduct } from "../BackButton/BackButtonProduct";

export const ProductsDetail = () => {
  const location = useLocation();

  const productDescription = { __html: location.state.description };

  return (
    <div className="product-detail-container">
      <div className="product-header">
        <h1>{location.state.name}</h1>
      </div>

      <div className="product-content">
        <div
          className="product-info"
          dangerouslySetInnerHTML={productDescription}
        />

        <div className="product-image-price">
          <img
            src={location.state.image}
            alt="Imagen del producto"
            className="product-image"
          />
        </div>
      </div>
      <BackButtonProduct />
    </div>
  );
};
