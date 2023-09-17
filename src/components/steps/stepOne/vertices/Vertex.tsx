import { MeshProps } from '@react-three/fiber'
import { a, easings, useSpring } from '@react-spring/three'

type Vertex = {
  position: MeshProps['position']
}
export const Vertex = ({ position }: Vertex) => {
  const { scale } = useSpring({
    from: { scale: 0.05 },
    to: [{ scale: 0.1 }],
    config: {
      easing: easings.easeOutBounce,
      duration: 850
    }
  })

  return (
    <a.mesh position={position} scale={scale}>
      <sphereGeometry />
      <meshBasicMaterial />
    </a.mesh>
  )
}
