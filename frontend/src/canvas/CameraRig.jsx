import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'
import state from '../store'
import { easing } from 'maath'

const CameraRig = ({children}) => {
  const group = useRef();
  const snap = useSnapshot(state);

  easing.dampE(
    group.current.rotation,
    [state.pointer.y / 10, -state.pointer.x / 5, 0],
    0.25,
  )
  return (
    <group>
      {children}
    </group>
  )
}

export default CameraRig
