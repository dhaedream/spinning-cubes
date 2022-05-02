import React, { useRef } from "react";
import "./App.scss";
import { Canvas, useFrame } from "@react-three/fiber";
// import { Box } from "@react-three/drei";

const Box = ({ position, args, color }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

function App() {
  return (
    <>
      {/* no html in canvas  */}

      <Canvas camera={{ position: [-5, 2, 10], fov: 90 }}>
        {/* equally light all in scene */}
        <ambientLight intensity={0.5} />
        <pointLight position={[-10, 0, -20]} intensity={0.7} />
        <Box position={[0, 1, 0]} args={[3, 2, 1]} color="pink" />
        <Box position={[-2, 1, -5]} color="lime" />
        <Box position={[5, 1, -2]} color="lime" />
      </Canvas>
    </>
  );
}

export default App;
