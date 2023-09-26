import { CameraControls, PointerLockControls } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { TalkMachineContext } from '../machines/talkMachine.context'

export const Cam = () => {
  const [state] = TalkMachineContext.useActor()
  const cameraControlsRef = useRef<CameraControls>(null)

  useEffect(() => {
    if (cameraControlsRef.current) {
      cameraControlsRef.current.truck(...state.context.camTruck.toArray(), true)
    }
  }, [state.context.camTruck])

  useEffect(() => {
    if (cameraControlsRef.current) {
      cameraControlsRef.current.dolly(state.context.camDolly, true)
    }
  }, [, state.context.camDolly])

  if (state.context.currentStep >= 3) {
    return <PointerLockControls />
  }

  return <CameraControls truckSpeed={0.001} ref={cameraControlsRef} />
}
