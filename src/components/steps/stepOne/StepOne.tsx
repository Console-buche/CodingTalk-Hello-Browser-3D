import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group } from 'three'
import { TalkMachineContext } from '../../../machines/talkMachine.context'
import { StepTitle } from '../StepTitle'
import { FirstPrimitives } from './primitives/FirstPrimitives'
import { RestPrimitives } from './primitives/RestPrimitives'
import { Box } from './primitives/box/Box'

export const StepOne = () => {
  const [state] = TalkMachineContext.useActor()
  const ref = useRef<Group>(null)

  useFrame(() => {
    if (!ref.current) {
      return null
    }
    ref.current.rotation.x += state.context.rotationView.x
    ref.current.rotation.y += state.context.rotationView.y
    ref.current.rotation.z += state.context.rotationView.z
  })

  if (state.context.currentStep >= 0.5) {
    return null
  }
  return (
    <>
      <group ref={ref}>
        <Box />
        <FirstPrimitives />
        <RestPrimitives />
      </group>

      <StepTitle value="hello world" step={0} px={-3} contextStep={0} />
    </>
  )
}
