import { a, useSpring } from '@react-spring/three'
import { MeshProps } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { DoubleSide, Mesh } from 'three'
import { TalkMachineContext } from '../../../../../machines/talkMachine.context'
import { STEP_ONE_VERTICES } from '../../stepOne.constants'

// TODO: give Triangle its three vertices as props instead of tapping directly in the STEP_ONE_VERTICES
// This way it'll be reusable

export const Triangle = (props: MeshProps) => {
  const [state] = TalkMachineContext.useActor()
  const ref = useRef<Mesh>(null)

  const isVisible = state.matches({ stepOne: 'hasThreeVertices' }) || state.matches({ stepOne: 'helloWorld' })
  const { opacity } = useSpring({
    opacity: isVisible ? 0.7 : 0,
    config: {
      duration: 1250
    }
  })

  const positions = useMemo(() => {
    return new Float32Array(Array.from(STEP_ONE_VERTICES.values()).flat())
  }, [])
  return (
    <mesh {...props} ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={3} itemSize={3} />
      </bufferGeometry>
      {/* @ts-ignore */}
      <a.meshBasicMaterial side={DoubleSide} color="red" opacity={opacity} transparent />
    </mesh>
  )
}
