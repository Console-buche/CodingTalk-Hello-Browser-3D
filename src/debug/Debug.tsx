import { button, useControls } from 'leva'
import { TalkMachineContext } from '../machines/talkMachine.context'

export const Debug = () => {
  const [_, event] = TalkMachineContext.useActor()
  useControls({
    stepOne: button(() => event({ type: 'start' })),
    showOneVertex: button(() => event({ type: 'showOneVertex' })),
    oneVertexVisible: button(() => event({ type: 'addVertices' })),
    finishBuildingWithEdges: button(() => event({ type: 'addRestVertices' })),
    finishBuildingWithTriangles: button(() => event({ type: 'addRestTriangles' })),
    moveToStepTwo: button(() => event({ type: 'moveToStepTwo' })),
    showWallOfBoxes: button(() => event({ type: 'showWallOfBoxes' })),
    lightUpTheWall: button(() => event({ type: 'lightUpWallOfBoxes' })),
    showTextures: button(() => event({ type: 'texturesVisible' }))
  })
  return <></>
}
