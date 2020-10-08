import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls, Html, useGLTF, useTexture } from '@react-three/drei';
import Texture from './texture.jpg';

const Model = () => {
  const gltf = useGLTF('/model.gltf');
  const texture = useTexture(Texture);

  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.02;
  });

  return (
    <mesh ref={ref} geometry={gltf.nodes.g_Group16190_Group161901.geometry} position={[0, 20, -20]}>
      <meshStandardMaterial roughness={0.5} metalness={1} map={texture}/>
    </mesh>
  );
};

useGLTF.preload('/model.gltf')

const App = () => 
(
  <main>
    <video
      src="https://res.cloudinary.com/dbpsabxkk/video/upload/v1602101664/ehrnsperger-anna/videos/unterwasser_bbikww.mp4"
      type='video/mp4'
      autoPlay
      muted
      loop
      style={{ position: 'absolute' }}
    />
    <Canvas style={{ position: 'absolute' }}>
      <OrbitControls />
      <pointLight position={[0, 200, 200]} intensity={2} color='#97ffff' />
      <Suspense fallback={<Html center><p>LOADING 3D</p></Html>}>
        <Model />
      </Suspense>
    </Canvas>
  </main>
);

export default App;
