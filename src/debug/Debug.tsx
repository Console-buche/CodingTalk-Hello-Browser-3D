import { button, useControls } from 'leva'
import { TalkMachineContext } from '../machines/talkMachine.context'

export const Debug = () => {
  const [state, event] = TalkMachineContext.useActor()
  const leva = useControls({
    stepOne: button(() => event({ type: 'start' })),
    showOneVertex: button(() => event({ type: 'showOneVertex' })),
    oneVertexVisible: button(() => event({ type: 'addVertices' }))
  })
  return <></>
}
