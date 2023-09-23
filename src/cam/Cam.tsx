import { CameraControls } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { TalkMachineContext } from '../machines/talkMachine.context'

export const Cam = () => {
  const [state] = TalkMachineContext.useActor()
  const cameraControlsRef = useRef<CameraControls>(null)
  //
  // useEffect(() => {
  //   if (state.matches({ stepOne: 'helloWorld' })) cameraControlsRef.current?.truck(-2.5, 0, true)
  // }, [state.value])

  useEffect(() => {
    if (cameraControlsRef.current) {
      console.log('trucking')
      cameraControlsRef.current.truck(...state.context.camTruck.toArray(), true)
    }
  }, [state.context.camTruck])

  return <CameraControls truckSpeed={0.001} ref={cameraControlsRef} />
}
