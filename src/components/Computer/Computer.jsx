import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useSpring, a } from '@react-spring/three';
import "./Computer.css";

const Computers = ({ isMobile }) => {
    const model = useGLTF("./desktop_pc/scene.gltf");
    const groupRef = useRef();

    // Ajusta la posición de la cámara en base al valor de scroll
    const { camera } = useThree();
    useEffect(() => {
      const updatedY = isMobile ? 5 - 10 * scroll : 3 - 5 * scroll;
      camera.position.set(20, updatedY, 5);
      camera.lookAt(0, 0, 0);
    }, [camera, isMobile, scroll]);
  
    return (
      <group ref={groupRef}>
        <hemisphereLight intensity={0.333} groundColor="white" />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={10}
          intensity={10}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight position={[-5, 5, 5]} intensity={300} castShadow />
        <pointLight position={[5, 5, 5]} intensity={300} castShadow />
        <primitive object={model.scene} scale={isMobile ? 0.5 : 0.6} position={[0, 0, -1]} />
        </group>
    );
  };

  export const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [scroll, setScroll] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScroll(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 990px)');
      setIsMobile(mediaQuery.matches);
  
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };
  
      mediaQuery.addEventListener('change', handleMediaQueryChange);
      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
    }, []);
  
    return (
      <div className="canvas">
        <Canvas
          frameloop="demand"
          shadows
          dpr={[1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <OrbitControls enableZoom={true} />
          <Computers isMobile={isMobile} scroll={scroll} />
          <Preload all />
        </Canvas>
      </div>
    );
  };
