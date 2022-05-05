import React, { useRef, useState } from "react";
//R3F
import { Canvas, useFrame } from "@react-three/fiber";
// Deai - R3F
import {
  softShadows,
  MeshWobbleMaterial,
  OrbitControls,
} from "@react-three/drei";
//Components
// import Header from "./components/header";
// Styles
import "./App.scss";
// React Spring
import { useSpring, a } from "@react-spring/three";

// soft Shadows
softShadows();

const SpinningMesh = ({ position, color, speed, args }) => {
  //ref to target the mesh
  const mesh = useRef();

  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  //Basic expand state
  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  return (
    <a.mesh
      position={position}
      ref={mesh}
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        color={color}
        speed={speed}
        attach="material"
        factor={0.9}
      />
    </a.mesh>

    //Using Drei box if you want
    // <Box {...props} ref={mesh} castShadow>
    //   <MeshWobbleMaterial
    //     {...props}
    //     attach='material'
    //     factor={0.6}
    //     Speed={1}
    //   />
    // </Box>
  );
};

const App = () => {
  return (
    <>
      {/* <Header /> */}
      {/* Our Scene & Camera is already built into our canvas */}
      <Canvas
        colorManagement
        shadowMap
        // test
        camera={{ position: [-25, -10, 10], fov: 60 }}
      >
        {/* This light makes things look pretty */}
        <ambientLight intensity={0.3} />
        {/* Our main source of light, also casting our shadow */}
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* A light to help illumnate the spinning boxes */}
        <pointLight position={[-10, 0, -20]} intensity={2.5} color="red" />
        <pointLight position={[0, -10, 0]} intensity={1.5} color="blue" />
        <group>
          {/* This mesh is the plane (The floor) */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
            receiveShadow
          >
            <planeBufferGeometry
              attach="geometry"
              args={[100, 100]}
              // color="white"
            />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>

          <SpinningMesh
            position={[0, 1, 0]}
            color="lightblue"
            args={[3, 2, 1]}
            speed={2}
          />
          <SpinningMesh position={[-2, 1, -5]} color="pink" speed={6} />

          <SpinningMesh position={[5, 1, -2]} color="pink" speed={6} />
        </group>

        {/* Allows us to move the canvas around for different prespectives */}
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default App;

// import React, { useRef } from "react";
// import "./App.scss";
// import { Canvas, useFrame } from "@react-three/fiber";
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

//       <Canvas
//         colorManagement
//         shadowMap
//         camera={{ position: [-5, 2, 10], fov: 90 }}
//       >
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

//         <group>
//           <mesh
//             receiveShadow
//             rotation={[-Math.PI / 2, 0, 0]}
//             position={[0, -1, 0]}
//           >
//             <planeBufferGeometry attach="geometry" args={[100, 100]} />
//             <meshStandardMaterial attach="material" color={"blue"} />
//             {/* <shadowMaterial attach="material" /> */}
//           </mesh>
//         </group>

//         <Box position={[0, 1, 0]} args={[3, 2, 1]} color="pink" />
//         <Box position={[-2, 1, -5]} color="lime" />
//         <Box position={[5, 1, -2]} color="lime" />
//       </Canvas>
//     </>
//   );
// }

// export default App;

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
