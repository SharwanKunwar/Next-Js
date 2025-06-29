'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import MyTexture from './MyTexture';

function MyScene() {
    

  return (
    <div className='bg-black backdrop-blur-lg w-6/12 h-[66vh] rounded-2xl shadow-2xl border border-white/30 flex justify-center items-center'>
      <Canvas className='w-full h-full'>
        <OrbitControls/>
        <ambientLight />
        <directionalLight position={[2, 2, 5]} />
       <MyTexture/>
      </Canvas>
    </div>
  )
}

export default MyScene
