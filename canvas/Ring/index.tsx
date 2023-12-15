import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center, OrbitControls } from "@react-three/drei";
import Ring from "./Ring";

const RingModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [-0.132, 0.57, 6.508], fov: 22.895 }}
      gl={{ preserveDrawingBuffer: true }}
      className="transition-all ease-in rounded-2xl"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="apartment" />

      <OrbitControls />
      <Center>
        <Ring />
      </Center>
    </Canvas>
  );
};

export default RingModel;
