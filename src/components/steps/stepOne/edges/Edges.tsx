import { TalkMachineContext } from '../../../../machines/talkMachine.context'
import { STEP_ONE_LINEPOINTS } from '../stepOne.constants'
import { Edge } from './Edge'

export const Edges = () => {
  const points = Array.from(STEP_ONE_LINEPOINTS.values())
  const [state] = TalkMachineContext.useActor()
  return (
    <>
      {points
        .filter((_, i) => i < state.context.stepOneVerticesCount - 1 || state.matches({ stepOne: 'hasThreeVertices' }))
        .map((v, i) => (
          <Edge key={`line-${i}`} index={i} points={v} />
        ))}
    </>
  )
}
