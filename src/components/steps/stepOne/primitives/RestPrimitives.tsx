import { GroupProps } from '@react-three/fiber'
import { TalkMachineContext } from '../../../../machines/talkMachine.context'
import { STEP_ONE_LINEPOINTS_REST, STEP_ONE_VERTICES_REST } from '../stepOne.constants'
import { Edges } from './edge/Edges'
import { Triangle } from './triangle/Triangle'
import { VerticesMesh } from './vertice/Vertice'

export const RestPrimitives = (props: GroupProps) => {
  const [state] = TalkMachineContext.useActor()
  const vertices = Array.from(STEP_ONE_VERTICES_REST.values())

  const points = Array.from(STEP_ONE_LINEPOINTS_REST.values())

  // TODO: Triangle and Edges still requiring a refactor to get their points from props instead of getting hardcoded
  // values
  //
  return (
    <group {...props}>
      {/* <Triangle /> */}
      <VerticesMesh vertices={vertices.filter((_, i) => i < state.context.stepOneVerticesRestCount)} />
      {/* <Edges */}
      {/*   points={points.filter( */}
      {/*     (_, i) => i < state.context.stepOneVerticesCount - 1 || state.matches({ stepOne: 'hasThreeVertices' }) */}
      {/*   )} */}
      {/* /> */}
    </group>
  )
}
