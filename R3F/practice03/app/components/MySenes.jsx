'use client'

import { OrbitControls,GizmoHelper,GizmoViewcube,GizmoViewport } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const Object = () =>{
    const obj01 = useRef();
    useFrame((state, delta)=>{
        
        obj01.current.rotation.x += delta;
    })
    return(
        <mesh ref={obj01}>
            <axesHelper args={[10]}/>
            <boxGeometry args={[4,4,4]}/>
            <meshBasicMaterial/>
        </mesh>
    )
}


function MySenes() {
  return (
    <Canvas>
        <GizmoHelper alignment='bottom-right' margin={[80,80]}>
            <GizmoViewport/>
        </GizmoHelper>
        <gridHelper args={[20,10, 0xff22aa, 0x55ccff]}/>
        <axesHelper args={[5]}/>
        <OrbitControls/>
        <Object/>
        <directionalLight position={[2,2,2]}/>
    </Canvas>
  )
}

export default MySenes
