"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function GameBox() {
  return (
    <mesh>
      <boxGeometry args={[3, 0.5, 2]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

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
  return (
    <main className="relative w-screen h-screen bg-white overflow-hidden">
      <Canvas camera={{ position: [4, 2, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <GameBox />
        <OrbitControls enablePan={false} />
      </Canvas>

      <button className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
        ORDER NOW
      </button>
    </main>
  );
}
