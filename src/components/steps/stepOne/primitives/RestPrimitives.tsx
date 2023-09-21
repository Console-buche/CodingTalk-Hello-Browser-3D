import { GroupProps } from '@react-three/fiber'
import { TalkMachineContext } from '../../../../machines/talkMachine.context'
import { STEP_ONE_LINEPOINTS_REST, STEP_ONE_TRIANGLES_REST, STEP_ONE_VERTICES_REST } from '../stepOne.constants'
import { Edges } from './edge/Edges'
import { Triangle } from './triangle/Triangle'
import { VerticesMesh } from './vertice/Vertice'

export const RestPrimitives = (props: GroupProps) => {
  const [state] = TalkMachineContext.useActor()
  const vertices = Array.from(STEP_ONE_VERTICES_REST.values())
  const restTriangles = Array.from(STEP_ONE_TRIANGLES_REST.values())
  const restEdges = Array.from(STEP_ONE_LINEPOINTS_REST.values())

  console.log(state.history)
  return (
    <group {...props}>
      {(state.matches({ stepOne: 'hasAllVertices' }) || state.context.stepOneVerticesRestCount === 8) && (
        <Edges points={restEdges} />
      )}
      <>
        {restTriangles.map((v, i) => (
          <Triangle isVisible={i < state.context.stepOneTrianglesRestCount} vertices={v} key={`restTriangle-${i}`} />
        ))}
      </>

      <VerticesMesh vertices={vertices.filter((_, i) => i < state.context.stepOneVerticesRestCount)} />
    </group>
  )
}
