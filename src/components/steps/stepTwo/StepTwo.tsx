import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group } from 'three'
import { TalkMachineContext } from '../../../machines/talkMachine.context'
import { Boxes } from './Boxes'
import { MovingLight } from './MovingLight'
import { StepTitle } from '../StepTitle'

export const StepTwo = () => {
  const [state] = TalkMachineContext.useActor()
  const ref = useRef<Group>(null)

  useFrame(() => {
    if (!ref.current) {
      return null
    }
  })

  return (
    <>
      <group ref={ref}>
        <Boxes />
        <MovingLight />
      </group>
      <StepTitle value="lights and colors" step={2} px={18} />
    </>
  )
}
