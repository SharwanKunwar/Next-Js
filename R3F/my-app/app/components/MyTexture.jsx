'use client'
import React from 'react'
import { OrbitControls, useTexture } from '@react-three/drei'
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function MyTexture() {
    const tex= useTexture('img04.png');
      const meshRef = useRef()

       // Rotate on every frame
  useFrame((state,delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta;
      meshRef.current.rotation.x += 0.005
    }
  })
    
  return (
    

        <mesh ref={meshRef}>
            <cylinderGeometry args={[4, 1, 10]} />
            <meshStandardMaterial wireframe   />
        </mesh>

    
  )
}

export default MyTexture
