import { Vertex } from '../../stepOne.constants'
import { Vertex as VertexMesh } from './Vertex'

export const VerticesMesh = ({ vertices }: { vertices: Vertex[] }) => {
  return (
    <>
      {vertices.map((v, i) => (
        <VertexMesh key={`vertex-${i}`} position={v} />
      ))}
    </>
  )
}
