'use client';
import React from 'react';
import  { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment } from '@react-three/drei';

export default function Scene() {

  return (
    <Canvas style={{backgroundColor: "black"}}>
      <directionalLight intensity={3} position={(0, 3, 2)} />
      <Environment files="/media/kloofendal_28d_misty_puresky_4k.hdr" />
      <Model />
    </Canvas>
  )
}
