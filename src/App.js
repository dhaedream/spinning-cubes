import React, { useRef } from "react";
import "./App.scss";
import { Canvas, useFrame } from "@react-three/fiber";
// import { Box } from "@react-three/drei";

const Box = ({ position }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="pink" />
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
        <Box position={[0, 1, 0]} />
        <Box position={[-2, 1, -5]} />
        <Box position={[5, 1, -2]} />
      </Canvas>
    </>
  );
}

export default App;
