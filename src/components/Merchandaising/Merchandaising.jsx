import React from "react";
import "./Merchandaising.css";
import comingSoon from "../../assets/comingSoon.png";
import { BackButton } from "../BackButton/BackButton";

export const Merchandaising = () => {
  return (
    <div className="merchandaising">
      <h2>Coming soon</h2>
      <img src={comingSoon}></img>
      <BackButton></BackButton>
    </div>
  );
};
