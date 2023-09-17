import { TalkMachineContext } from '../../../../machines/talkMachine.context'
import { STEP_ONE_VERTICES } from '../stepOne.constants'
import { Vertex } from './Vertex'

export const Vertices = () => {
  const vertices = Array.from(STEP_ONE_VERTICES.values())

  const [state] = TalkMachineContext.useActor()

  return (
    <>
      {vertices
        .filter((_, i) => i < state.context.stepOneVerticesCount)
        .map((v, i) => (
          <Vertex key={`vertex-${i}`} position={v} />
        ))}
    </>
  )
}
