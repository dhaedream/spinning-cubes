import React, { useRef } from "react";
import "./App.scss";
import { Canvas, useFrame } from "@react-three/fiber";
// import { Box } from "@react-three/drei";

function App() {
  const mesh = useRef(null);

  return (
    <>
      {/* no html in canvas  */}
      <Canvas>
        <mesh>
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" />
        </mesh>
        {/* <Box /> */}
      </Canvas>
    </>
  );
}

export default App;
