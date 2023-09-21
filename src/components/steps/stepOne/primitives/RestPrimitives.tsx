import { GroupProps } from '@react-three/fiber'
import { TalkMachineContext } from '../../../../machines/talkMachine.context'
import { STEP_ONE_LINEPOINTS_REST, STEP_ONE_VERTICES_REST, STEP_ONE_TRIANGLES_REST } from '../stepOne.constants'
import { Triangle } from './triangle/Triangle.1'
import { VerticesMesh } from './vertice/Vertice'
import { Edges } from './edge/Edges'

export const RestPrimitives = (props: GroupProps) => {
  const [state] = TalkMachineContext.useActor()
  const vertices = Array.from(STEP_ONE_VERTICES_REST.values())
  const restTriangles = Array.from(STEP_ONE_TRIANGLES_REST.values())
  const restEdges = Array.from(STEP_ONE_LINEPOINTS_REST.values())

  return (
    <group {...props}>
      {state.matches({ stepOne: 'hasAllVertices' }) && (
        <>
          {restTriangles.map((v, i) => (
            <Triangle isVisible vertices={v} key={`restTriangle-${i}`} />
          ))}
          <Edges points={restEdges} />
        </>
      )}
      <VerticesMesh vertices={vertices.filter((_, i) => i < state.context.stepOneVerticesRestCount)} />
    </group>
  )
}
