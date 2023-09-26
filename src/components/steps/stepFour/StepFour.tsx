import { SpotLight } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { type SpotLight as SpotL } from 'three'
import { TalkMachineContext } from '../../../machines/talkMachine.context'
import { ScientistModel } from './ScientistModel'

export const StepFour = () => {
  const [state] = TalkMachineContext.useActor()
  const ref = useRef<SpotL>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }
    ref.current.target.position.set(20, 0, 30)
    ref.current.target.updateMatrixWorld()
  }, [ref.current])

  return (
    <>
      <SpotLight
        opacity={0.3}
        distance={7}
        angle={0.45}
        ref={ref}
        intensity={15}
        attenuation={4.75}
        position={[20, 0.1, 30]}
      />
      <ScientistModel position={[20, -3.4, 30.5]} scale={0.03} />
    </>
  )
}
