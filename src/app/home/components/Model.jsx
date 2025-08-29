"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function SplineModel() {
  const { scene } = useGLTF("/models/scene.gltf"); 
  return <primitive object={scene} scale={1.5} />;
}

export default function ModelCanvas() {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <SplineModel />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
