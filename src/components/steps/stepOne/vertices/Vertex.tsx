import { Sphere } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'

type Vertex = {
  index: number // This will be used for animating delay between each vertex apparition
  position: MeshProps['position']
}
export const Vertex = ({ position }: Vertex) => {
  return <Sphere scale={0.1} position={position} />
}
