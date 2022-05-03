import React, { useRef } from "react";
import "./App.scss";
import { Canvas, useFrame } from "@react-three/fiber";
// import { Box } from "@react-three/drei";

const Box = ({ position, args, color }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

function App() {
  return (
    <>
      {/* no html in canvas  */}

      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 2, 10], fov: 90 }}
      >
        {/* equally light all in scene */}
        <ambientLight intensity={0.5} />
        {/*point light that points */}
        <pointLight position={[-10, 0, -20]} intensity={0.7} />
        <pointLight position={[0, -10, 0]} intensity={2} />
        {/* main light + cast shadows */}
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={2}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={10}
        />

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />

            <meshStandardMaterial attach="material" color={"blue"} />
          </mesh>
        </group>

        <Box position={[0, 1, 0]} args={[3, 2, 1]} color="pink" />
        <Box position={[-2, 1, -5]} color="lime" />
        <Box position={[5, 1, -2]} color="lime" />
      </Canvas>
    </>
  );
}

export default App;

// import React, { useRef } from "react";
// import "./App.scss";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Material } from "three";
// // import { Box } from "@react-three/drei";

// const Box = ({ position, args, color }) => {
//   const mesh = useRef(null);
//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
//   return (
//     <mesh castShadow position={position} ref={mesh}>
//       <boxBufferGeometry attach="geometry" args={args} />
//       <meshStandardMaterial attach="material" color={color} />
//     </mesh>
//   );
// };

// function App() {
//   return (
//     <>
//       {/* no html in canvas  */}

//       <Canvas shadowMap camera={{ position: [-5, 2, 10], fov: 90 }}>
//         {/* equally light all in scene */}
//         <ambientLight intensity={0.5} />
//         {/*point light that points */}
//         <pointLight position={[-10, 0, -20]} intensity={0.7} />
//         <pointLight position={[0, -10, 0]} intensity={2} />
//         {/* main light + cast shadows */}
//         <directionalLight
//           castShadow
//           position={[0, 10, 0]}
//           intensity={2}
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-far={50}
//           shadow-camera-left={10}
//           shadow-camera-right={10}
//           shadow-camera-top={10}
//           shadow-camera-bottom={10}
//         />

//         <Box position={[0, 1, 0]} args={[3, 2, 1]} color="pink" />
//         <Box position={[-2, 1, -5]} color="lime" />
//         <Box position={[5, 1, -2]} color="lime" />

//         <group>
//           <mesh
//             castShadow
//             rotation={[-Math.PI / 2, 0, 0]}
//             position={[0, -10, 0]}
//           >
//             <planeBufferGeometry attach="geometry" args={[100, 100]} />
//             {/* to cast stadow */}
//             {/* <meshStandardMaterial attach="material" color={"grey"} /> */}
//             {/* <shadowMaterial attach="material" color={"grey"} /> */}
//             <shadowMaterial attach="material" />
//           </mesh>
//         </group>
//       </Canvas>
//     </>
//   );
// }

// export default App;
