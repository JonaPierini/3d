import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AboutUs.css";
import { BackButton } from "../BackButton/BackButton";

export const AboutUs = () => {
  const [text, setText] = useState([]);

  useEffect(() => {
    const fetchText = async () => {
      try {
        const response = await axios.get("/getAboutUs", {
          params: {
            isGenoma: true,
          },
        });

        setText(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    fetchText();
  }, []);

  return (
    <div className="aboutUs">
      <h2>{text.titleMission}</h2>
      <p>{text.bodyMission}</p>
      <h2>{text.titleVision}</h2>
      <p>{text.bodyVision}</p>
      <BackButton></BackButton>
    </div>
  );
};
