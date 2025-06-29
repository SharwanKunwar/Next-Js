'use client'

import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

function Rotation() {
    const meshRef = useRef();
    useFrame((state, delta)=>{
        meshRef.current.rotation.x += delta;
        meshRef.current.rotation.z += delta;
        meshRef.current.rotation.y += delta;
    })
  return (
    
        <mesh ref={meshRef}>
            <boxGeometry args={[2,2,2]}/>
            <meshBasicMaterial  color={"pink"} />
        </mesh>
        
    
  )
}

export default Rotation
