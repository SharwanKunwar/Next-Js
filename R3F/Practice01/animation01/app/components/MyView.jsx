'use client'

import React from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Rotation from './Rotation'

function MyView() {
  return (
    <div className='bg-black/30 border border-white/50 w-6/12 h-6/8 rounded-xl text-white shadow-2xl shadow-amber-50 flex justify-center items-center'>
      <Canvas>
        <OrbitControls/>
            <Rotation/>
            <Rotation/>
            <Rotation/>
            <Rotation/>
            <Rotation/>
            <Rotation/>
            <Rotation/>
            <Rotation/>
            <Rotation/>
            
            
            
      </Canvas>
    </div>
  )
}

export default MyView
