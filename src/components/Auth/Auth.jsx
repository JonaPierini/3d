import axios from "axios";
import React, { useState } from "react";
import "./Auth.css";
import { ColorRing } from "react-loader-spinner";
import { BackButton } from "../BackButton/BackButton";

export const Auth = () => {
  const [inputChange, setInputChange] = useState("");

  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    setInputChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoader(true);

    axios
      .post("/modifyById", { id: inputChange, isGenoma: true })
      .then((response) => {
        if (response.data === true) {
          Swal.fire({
            title: "Authentic product",
            text: "You have an authentic product from the Genoma Pharma brand",
            icon: "success",
            confirmButtonColor: "#93BE4F",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Authentication failed",
            text: "You may have an illegitimate product, contact us.",
            confirmButtonColor: "#DD6B55",
          });
        }
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <>
      {loader ? (
        <div className="container-loader">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#bd7231", "#cb6120"]}
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="container">
          <div className="mb-3">
            <label className="form-label">Enter the product code</label>
            <p>Only for products manufactured from year 2024</p>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={inputChange}
              onChange={handleChange}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="submit"
              className="btn btn-dark mb-3"
              style={{ marginRight: "3px" }}
            >
              Authenticate product
            </button>
            <BackButton />
          </div>
        </form>
      )}
    </>
  );
};
