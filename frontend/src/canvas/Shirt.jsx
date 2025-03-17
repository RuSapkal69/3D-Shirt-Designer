import React from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'
import {Decal, useGLTF, useTexture} from '@react-three/drei'
import state from '../store'

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');

  const logoTexture = useTexture(snap.logoDecal);
  

  return (
    <div>
      
    </div>
  )
}

export default Shirt
