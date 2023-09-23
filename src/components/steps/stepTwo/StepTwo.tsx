import { Box } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group } from 'three'
import { TalkMachineContext } from '../../../machines/talkMachine.context'
import { Boxes } from './Boxes'
import { MovingLight } from './MovingLight'

export const StepTwo = () => {
  const [state] = TalkMachineContext.useActor()
  const ref = useRef<Group>(null)

  useFrame(() => {
    if (!ref.current) {
      return null
    }
    // ref.current.rotation.x += state.context.rotationView.x
    // ref.current.rotation.y += state.context.rotationView.y
    // ref.current.rotation.z += state.context.rotationView.z
  })

  return (
    <>
      <group ref={ref}>
        <Boxes />
        <MovingLight />
      </group>
      {/* <group position-y={-1}> */}
      {/*   <Text position={[0, -1, 0]}>{JSON.stringify(state.value)}</Text> */}
      {/*   <Text position={[0, -2, 0]}>{JSON.stringify(state.matches({ stepOne: 'isMissingVertices' }))}</Text> */}
      {/* </group> */}
    </>
  )
}
