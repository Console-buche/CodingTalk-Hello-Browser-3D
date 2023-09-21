import { Box as BoxPrimitive } from '@react-three/drei'
import { TalkMachineContext } from '../../../../../machines/talkMachine.context'
import { useSpring, a } from '@react-spring/three'

export const Box = () => {
  const [state] = TalkMachineContext.useActor()

  const { opacity } = useSpring({
    opacity: state.matches('notStarted') ? 0.7 : 0,
    config: {
      duration: 1250
    }
  })

  return (
    <BoxPrimitive args={[2, 2, 2]} position-z={-1}>
      {/* @ts-ignore */}
      <a.meshBasicMaterial depthTest={false} transparent opacity={opacity} />
    </BoxPrimitive>
  )
}
