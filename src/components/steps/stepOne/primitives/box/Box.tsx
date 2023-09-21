import { Box as BoxPrimitive } from '@react-three/drei'
import { TalkMachineContext } from '../../../../../machines/talkMachine.context'
import { useSpring, a } from '@react-spring/three'
import { useRef } from 'react'
import { Mesh } from 'three'

export const Box = () => {
  const [state] = TalkMachineContext.useActor()
  const ref = useRef<Mesh>(null)
  const { opacity } = useSpring({
    opacity: state.matches('notStarted') ? 0.7 : 0,
    config: {
      duration: 1250
    }
  })

  console.log(ref.current)

  return (
    <BoxPrimitive ref={ref} args={[2, 2, 2]} position-z={-1}>
      {/* @ts-ignore */}
      <a.meshBasicMaterial depthTest={false} transparent opacity={opacity} />
    </BoxPrimitive>
  )
}
