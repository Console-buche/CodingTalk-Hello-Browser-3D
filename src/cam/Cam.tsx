import { CameraControls, PointerLockControls } from '@react-three/drei'
import { KeyboardControls } from '@react-three/drei'
import { ReactNode, useEffect, useRef } from 'react'
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

export const Controls = ({ children }: { children: ReactNode }) => {
  return (
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
        { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
        { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
        { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
        { name: 'jump', keys: ['Space'] }
      ]}
    >
      <Cam />
      {children}
    </KeyboardControls>
  )
}
