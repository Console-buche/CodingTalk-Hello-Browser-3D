import { TalkMachineContext } from '../../../machines/talkMachine.context'
import { Edges } from './edges/Edges'
import { Vertices } from './vertices/Vertices'
import { Text } from '@react-three/drei'

export const StepOne = () => {
  const [state, event] = TalkMachineContext.useActor()
  return (
    <>
      {/* <Triangle /> */}
      <Vertices />
      <Edges />
      <Text position={[0, -1, 0]}>{JSON.stringify(state.value)}</Text>
      <Text position={[0, -2, 0]}>{JSON.stringify(state.matches({ stepOne: 'isMissingVertices' }))}</Text>
    </>
  )
}
