import { button, useControls } from 'leva'
import { TalkMachineContext } from '../machines/talkMachine.context'

export const Debug = () => {
  const [_, event] = TalkMachineContext.useActor()
  useControls({
    stepOne: button(() => event({ type: 'start' })),
    showOneVertex: button(() => event({ type: 'showOneVertex' })),
    oneVertexVisible: button(() => event({ type: 'addVertices' })),
    finishBuildingWithEdges: button(() => event({ type: 'addRestVertices' })),
    finishBuildingWithTriangles: button(() => event({ type: 'addRestTriangles' }))
  })
  return <></>
}
