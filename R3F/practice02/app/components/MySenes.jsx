'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'


const Rotation = () =>{
    const boxRef = useRef();
    useFrame((state, delta)=>{
        boxRef.current.rotation.x += delta;      
        boxRef.current.rotation.y += delta;      
    })

    return(
        <mesh ref={boxRef}>
            <sphereGeometry args={[2, 20, 3]} />
            <meshBasicMaterial wireframe />
        </mesh>
    )
}




function MySenes() {
  return (
    <div className='bg-black border border-white/30  w-full h-full rounded-2xl'>
        <Canvas>
            <OrbitControls/>
            <Rotation/>
        </Canvas>
      
    </div>
  )
}

export default MySenes
