import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../assets/notfound.png"
import "./NoMatch.css";

export const NoMatch = () => {
  return (
    <div className="container">
      <h1>No Match</h1>
      <img src={notfound}></img>
      <Link style={{ textDecoration: "none" }} to={"/"}>
        <button type="button" className="btn btn-outline-secondary">
          Back
        </button>
      </Link>
    </div>
  );
};
