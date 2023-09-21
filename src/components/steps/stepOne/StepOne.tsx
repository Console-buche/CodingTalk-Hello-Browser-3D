import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group } from 'three'
import { TalkMachineContext } from '../../../machines/talkMachine.context'
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
    // ref.current.rotation.z += 0.001
  })

  return (
    <>
      <group ref={ref}>
        <Box />
        <FirstPrimitives />
        <RestPrimitives />
      </group>
      <group position-y={-1}>
        <Text position={[0, -1, 0]}>{JSON.stringify(state.value)}</Text>
        <Text position={[0, -2, 0]}>{JSON.stringify(state.matches({ stepOne: 'isMissingVertices' }))}</Text>
      </group>
    </>
  )
}
