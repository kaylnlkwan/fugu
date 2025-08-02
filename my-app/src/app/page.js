"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import Button from "../components/Button";
import Banner from "../components/Banner";

function GameBox() {
  const meshRef = useRef();
  const [texture, setTexture] = useState(null);

  // Load texture with error handling
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      "/board-game-front.png",
      (loadedTexture) => {
        console.log("Front texture loaded successfully");
        setTexture(loadedTexture);
      },
      (progress) => {
        console.log("Loading progress:", progress);
      },
      (error) => {
        console.error("Error loading texture:", error);
        setTexture(null);
      }
    );
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3; // Spin on Y-axis only
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0.2, -0.3, 0]}>
      <boxGeometry args={[2, 0.4, 1.5]} />
      <meshBasicMaterial color="#ffffff" map={texture} />
    </mesh>
  );
}

function AutoRotateCamera() {
  const { camera } = useThree();
  const tRef = useRef(0);

  useFrame((_, delta) => {
    tRef.current += delta * 0.2;
    camera.position.x = Math.sin(tRef.current) * 4;
    camera.position.z = Math.cos(tRef.current) * 4;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Home() {
  const bubbleData = [
    // Light green circle (upper left)
    {
      position: { left: "15%", top: "30%" },
      size: "60px",
      color: "rgb(184, 232, 82)",
    },
    // Coral red circle (upper central-right)
    {
      position: { left: "40%", top: "20%" },
      size: "120px",
      color: "rgb(255, 110, 116)",
    },
    // Light blue circle (upper right)
    {
      position: { left: "90%", top: "20%" },
      size: "160px",
      color: "rgb(115, 206, 255)",
    },
    // Pink circle (lower left)
    {
      position: { left: "15%", top: "80%" },
      size: "230px",
      color: "rgb(240, 138, 184)",
    },
    // Yellow circle (below box)
    {
      position: { left: "48%", top: "90%" },
      size: "100px",
      color: "rgb(253, 201, 22)",
    },
    // Dark green circle (lower right)
    {
      position: { left: "80%", top: "75%" },
      size: "120px",
      color: "rgb(58, 152, 19)",
    },
  ];

  return (
    <main className="relative w-screen h-screen bg-white overflow-hidden">
      <Banner />

      <Canvas camera={{ position: [3, 2.5, 3], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <GameBox />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>

      {/* Flat 2D bubbles positioned absolutely */}
      {bubbleData.map((bubble, index) => {
        // Create different shapes based on index
        let shapeClass = "absolute";
        let shapeStyle = {
          left: bubble.position.left,
          top: bubble.position.top,
          width: bubble.size,
          height: bubble.size,
          backgroundColor: bubble.color,
          transform: "translate(-50%, -50%)",
          zIndex: 10,
        };

        // Different shapes for different bubbles
        if (index === 0) {
          // Flower-like shape (light green)
          shapeClass = "absolute";
          shapeStyle = {
            ...shapeStyle,
            clipPath:
              "polygon(50% 0%, 80% 20%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 20% 20%)",
          };
        } else if (index === 2) {
          // Improved figure-eight shape (light blue)
          shapeClass = "absolute";
          shapeStyle = {
            ...shapeStyle,
            clipPath:
              "polygon(20% 0%, 80% 0%, 80% 35%, 50% 35%, 50% 65%, 80% 65%, 80% 100%, 20% 100%, 20% 65%, 50% 65%, 50% 35%, 20% 35%)",
          };
        } else if (index === 3) {
          // Star-like shape (pink)
          shapeClass = "absolute";
          shapeStyle = {
            ...shapeStyle,
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          };
        } else if (index === 5) {
          // Diamond shape (dark green)
          shapeClass = "absolute";
          shapeStyle = {
            ...shapeStyle,
            borderRadius: "20px",
            width: `${parseFloat(bubble.size) * 1.2}px`,
            height: `${parseFloat(bubble.size) * 0.8}px`,
          };
        }

        return <div key={index} className={shapeClass} style={shapeStyle} />;
      })}

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <Button>ORDER NOW</Button>
      </div>

      {/* Giant FUGU text in the middle */}
      <div className="absolute left-1/6 top-1/4 transform -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] z-50">
        <h1 className="font-cinetype-extrabold text-9xl text-black">FUGU</h1>
        <p className="font-cinetype-bold text-xl text-black mt-1 ml-2">
          the risky sushi strategy board game
        </p>
      </div>
    </main>
  );
}
