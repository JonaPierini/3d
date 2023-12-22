import React from "react";

import { useNavigate } from "react-router-dom";

export const BackButtonProduct = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/product");
  };

  return (
    <button onClick={handleBack} type="button" className="btn btn-dark mb-3">
      Back
    </button>
  );
};
