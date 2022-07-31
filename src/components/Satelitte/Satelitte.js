import React, { useRef } from 'react';

import { useFrame } from '@react-three/fiber'
import { Sphere, MeshReflectorMaterial } from '@react-three/drei';

function Satelitte(){
    const sat = useRef();

    useFrame(({mouse }) => {
        sat.current.position.z = mouse.x ;
        sat.current.position.y = mouse.y ;
    });

    return (
        <Sphere ref={sat}>
            <MeshReflectorMaterial />
        </Sphere>
    );
}

export default Satelitte;