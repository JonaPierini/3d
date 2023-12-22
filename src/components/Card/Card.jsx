import React, { useState, useEffect } from "react";
import "./Card.css";
import autenticidad from "../../assets/auth.png";
import calidad from "../../assets/healthy.png";
import tecnologia from "../../assets/tech.png";
import axios from "axios";

export const Card = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchText = async () => {
      try {
        const response = await axios.get("/getCardsIndex", {
          params: {
            isGenoma: true,
          },
        });

        setCards(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    fetchText();
  }, []);

  return (
    <div className="row">
      <div className="card" style={{ width: "18rem", marginTop: "1rem" }}>
        <img src={calidad} className="card-img-top" alt="calidad" style={{ height: "240px"}} />
        <div className="card-body">
          <p className="card-text">
            {cards.card1}
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", marginTop: "1rem" }}>
        <img src={tecnologia} className="card-img-top" alt="tecnologia" style={{ height: "240px"}}/>
        <div className="card-body">
          <p className="card-text">
            {cards.card2}
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", marginTop: "1rem" }}>
        <img src={autenticidad} className="card-img-top" alt="autenticidad" style={{ height: "240px"}} />
        <div className="card-body">
          <p className="card-text">
            {cards.card3}
          </p>
        </div>
      </div>
    </div>
  );
};
