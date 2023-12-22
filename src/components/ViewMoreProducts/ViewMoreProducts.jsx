import React, { useEffect, useState } from "react";
import "./ViewMoreProducts.css";
import { ProductItem } from "../Products/ProductItem";
import axios from "axios";
import { BackButton } from "../BackButton/BackButton";

export const ViewMoreProducts = () => {
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
      <div className="products-page">
        <h3 className="text-center">Orals Product</h3>
        <div className="product-list d-flex flex-wrap justify-content-around">
          {products
            .filter((product) => product.type === "orals")
            .map((product) => {
              return <ProductItem key={product.id} product={product} />;
            })}
        </div>

        <h3 className="text-center">Inyectable Product</h3>
        <div className="product-list d-flex flex-wrap justify-content-around">
          {products
            .filter((product) => product.type === "inyectable")
            .map((product) => {
              return <ProductItem key={product.id} product={product} />;
            })}
        </div>
      </div>

      <div className="buttonViewMoreProducts">
        <BackButton></BackButton>
      </div>
    </>
  );
};
