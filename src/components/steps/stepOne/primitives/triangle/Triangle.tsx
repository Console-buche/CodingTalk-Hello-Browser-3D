import { a, easings, useSpring } from '@react-spring/three'
import { useMemo, useRef } from 'react'
import { Color, DoubleSide, Mesh } from 'three'
import { Vertex } from '../../stepOne.constants'

export const Triangle = ({ vertices, isVisible, color }: { color?: Color; isVisible: boolean; vertices: Vertex[] }) => {
  const ref = useRef<Mesh>(null)

  const randomColor = useMemo(() => color ?? '#' + Math.floor(Math.random() * 16777215).toString(16), [color])
  const { opacity } = useSpring({
    opacity: isVisible ? 0.9 : 0,
    config: {
      duration: 750,
      easing: easings.easeOutSine
    }
  })

  const positions = useMemo(() => {
    return new Float32Array(vertices.flat())
  }, [])

  return (
    <mesh ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={3} itemSize={3} />
      </bufferGeometry>
      {/* @ts-ignore */}
      <a.meshBasicMaterial side={DoubleSide} color={randomColor} opacity={opacity} transparent />
    </mesh>
  )
}
