import React, { useRef, useState } from 'react';
import * as THREE from 'three';

import { useFrame, useLoader } from '@react-three/fiber'
import { useProgress, useCubeTexture,Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import { TextureLoader } from 'three';

const deg2rad = degrees => degrees * (Math.PI / 180);

function MessyBlob(props) {
   
    const material = useRef();
    const geometry = useRef();
    
    const [roughness, normal] = useLoader(TextureLoader, [
      '/assets/textures/sand/rough.jpeg',
      '/assets/textures/sand/normal.jpeg'
    ]);
  
    const envMap = useCubeTexture(
      ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
      { path: "/assets/textures/cubes/" }
    );

    let rotation = 0.0;
    let distort = 0.3;
    let intensity = 0.3;
  
    useFrame((obj) => {
  
      const { camera, clock, mouse } = obj;
  
      geometry.current.rotation.x += 0.1 * Math.abs(Math.sin(clock.elapsedTime));
      geometry.current.rotation.y += 0.08 * Math.abs(Math.sin(clock.elapsedTime));
      geometry.current.rotation.z = THREE.MathUtils
        .lerp(
          geometry.current.rotation.z,
          rotation, 
          0.12
        );
  
      material.current.distort = THREE.MathUtils
        .lerp(
          material.current.distort,
          distort,
          0.1
        );
  
      material.current.emissiveIntensity = THREE.MathUtils
          .lerp(
            material.current.emissiveIntensity,
            intensity,
            0.1
          );
  
    });
  
    const handleClick = () => {
      ( distort < 0.6 ) ? 
        distort += 0.05: 
        distort = 0.2;
      
      rotation = geometry.current.rotation.z + deg2rad(110);
    }
  
    const handleMouseIn = () => { intensity = 0.9; }
    const handleMouseOut = () => { intensity = 0.3; }
  
    return (
      <Icosahedron onPointerOver={handleMouseIn} onPointerOut={handleMouseOut} onClick={handleClick} ref={geometry} args={[1, 4]} {...props} recieveShadow >
        <MeshDistortMaterial
          color={"#8fef9e"}
          envMap={envMap}
          speed={5}
          bumpMap={normal}
          emissive={[0, 0.9, 0]}
          roughness={0.1}
          metalness={0.}
          bumpScale={0.005}
          clearcoat={1}
          clearcoatRoughness={1}
          radius={1}
          distort={0.3}
          ref={material}
          
        />
      </Icosahedron>
    );
  }

export default MessyBlob;