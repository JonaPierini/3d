import React, { useState, useEffect } from "react";
import { Scene, PerspectiveCamera, Mesh, BoxGeometry, MeshBasicMaterial } from "three";

export const ThreeDComponent = ({ model })  => {
  const [scene, setScene] = useState(null);

  useEffect(() => {
    // Creamos la escena
    const scene = new Scene();

    // Creamos la cámara
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 5;

    // Creamos el modelo
    const geometry = new BoxGeometry(2, 2, 2);
    const material = new MeshBasicMaterial({ color: "red" });
    const mesh = new Mesh(geometry, material);

    // Agregamos el modelo a la escena
    scene.add(mesh);

    // Asignamos la escena al estado
    setScene(scene);
  }, []);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <canvas style={{ width: "100%", height: "100%" }} ref={(canvas) => { scene.setCanvas(canvas) }} />
    </div>
  );
};