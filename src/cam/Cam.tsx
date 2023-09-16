import { CameraControls } from '@react-three/drei'
import { useRef } from 'react'

export const Cam = () => {
  const cameraControlsRef = useRef<CameraControls>(null)
  return <CameraControls ref={cameraControlsRef} />
}
