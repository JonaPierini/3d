import React from "react";

import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <button onClick={handleBack} type="button" className="btn btn-dark mb-3">
      Back
    </button>
  );
};
