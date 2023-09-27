import { button, Leva, useControls } from 'leva'
import { TalkMachineContext } from '../machines/talkMachine.context'
import './leva.css'

export const Debug = () => {
  const [state, event] = TalkMachineContext.useActor()
  useControls({
    'Hello World': button(() => event({ type: 'start' })),
    'Vertex, vertices': button(() => event({ type: 'showOneVertex' })),
    'Form the shape': button(() => event({ type: 'addVertices' })),
    'Build full triangle': button(() => event({ type: 'addRestVertices' })),
    'Paint the faces': button(() => event({ type: 'addRestTriangles' })),
    'Lights and colors': button(() => event({ type: 'moveToStepTwo' })),
    Materials: button(() => event({ type: 'showWallOfBoxes' })),
    Lights: button(() => event({ type: 'lightUpWallOfBoxes' })),
    Events: button(() => event({ type: 'texturesVisible' })),
    Gravity: button(() => event({ type: 'unpausedGravity' }))
  })
  return (
    <Leva
      titleBar={{ title: 'Coding Talk / 3D' }}
      hideCopyButton
      theme={{
        colors: {
          accent2: state.context.color.getStyle(),
          elevation2: 'transparent',
          elevation1: 'transparent'
        }
      }}
      collapsed
      flat
    />
  )
}
