import React, { Suspense, useRef, useEffect, useState } from 'react';
import styles from './Home.module.css';
import Ground from './Ground';
import MessyBlob from '../MessyBlob/MessyBlob'
import Satelitte from '../Satelitte/Satelitte';
import Spinner from '../Spinner/Spinner';

import { Canvas } from '@react-three/fiber'
import { Cloud, Html, Environment, CubeCamera, OrbitControls, PerspectiveCamera, MeshReflectorMaterial } from '@react-three/drei';

import { SSAO, Bloom, ChromaticAberration, EffectComposer } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

function Light(props) {
  return (
    <>
    <ambientLight intensity={1} castShadow/>
    <spotLight castShadow position={[10, 20, 10]} angle={0.5} intensity={1} penumbra={1} />
    </>
  );
}

function Home(props) {

  return (
     <main className={ props.toggle === true ? styles.Home : styles.HideHome } >

      {/* CANVAS, SCENE */}
      <Suspense fallback={<Spinner />}>
      <Canvas 
              shadows frameloop='demand'
      >
      <color args={[0,0,0]} attach="background" /> 

      <fog attach="fog" color="grey"  near={2}/>
      
      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (

          <>
            <Environment map={texture} />
            
          </>

        )}
      </CubeCamera>

      {/* CAMERA & CONTROLS */}
      <OrbitControls minDistance={12} maxDistance={20} maxPolarAngle={Math.PI/4}  maxAzimuthAngle={0}/>
      <PerspectiveCamera makeDefault fov={50} position={[-0.78, 14.0, 4.64]} />
      
      {/* LIGHTS */}
      <spotLight 
        color={[0.1, 0.82, 0.34]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight 
        color={[0.23, 0.43, 0.9]}
        intensity={1.8}
        angle={0.5}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      {/* OBJECTS */}
      <MessyBlob 
        position={[0, 4, 0]} />
      <Html
            as="div"
            sprite
            transform
            distanceFactor={4}
            position={[0, 0, 0]}
            style={{
              background: 'none',
              padding: '10px 18px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
        <h1 className={styles.Title}> ewSticky </h1>
        <p className={styles.Text}> I'm Ryan Mohamed. Welcome to my portfolio! </p>
        <p className={styles.Text}> As of current deployment, this website uses: </p>
        
        <div className={styles.SwiperContainer}>
          <div className={styles.Swiper}>
            <span className={styles.tech}>react.js</span>
            <span className={styles.tech}>react-router</span>
            <span className={styles.tech}>react-three</span>
          </div>
        </div>

        <p className={styles.Text}> Have fun exploring! </p> 
            
      </Html>

      <Ground />

      {/* POSTPROCESSING */}
      <EffectComposer>

        <Bloom
          blendFunction={BlendFunction.ADD}
          
          intensity={1.4}
          width={300}
          height={300}
          kernelSize={5}
          luminanceThreshold={0.30} //raise to mask darker objects
          luminanceSmoothing={0.025} //[0,1]
        />
        <ChromaticAberration 
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0005, 0.0015]}
        />
      </EffectComposer>

      </Canvas>
      </Suspense> 

     
    
     </main>
  );

}

export default Home;
