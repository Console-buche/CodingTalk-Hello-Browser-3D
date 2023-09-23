import { GroupProps } from '@react-three/fiber'
import { TalkMachineContext } from '../../../../machines/talkMachine.context'
import { STEP_ONE_LINEPOINTS, STEP_ONE_VERTICES } from '../stepOne.constants'
import { Edges } from './edge/Edges'
import { Triangle } from './triangle/Triangle'
import { VerticesMesh } from './vertice/Vertice'
import { Color } from 'three'

export const FirstPrimitives = (props: GroupProps) => {
  const [state] = TalkMachineContext.useActor()
  const vertices = Array.from(STEP_ONE_VERTICES.values())

  const points = Array.from(STEP_ONE_LINEPOINTS.values())

  return (
    <group {...props}>
      <Triangle
        color={new Color('lime')}
        isVisible={!state.matches('notStarted')}
        vertices={Array.from(STEP_ONE_VERTICES.values())}
      />
      <VerticesMesh vertices={vertices.filter((_, i) => i < state.context.stepOneVerticesCount)} />
      <Edges
        points={points.filter(
          (_, i) => i < state.context.stepOneVerticesCount - 1 || state.context.stepOneVerticesCount === 3
        )}
      />
    </group>
  )
}
