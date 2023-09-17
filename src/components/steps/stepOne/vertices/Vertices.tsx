import { STEP_ONE_VERTICES } from '../stepOne.constants'
import { Vertex } from './Vertex'

export const Vertices = () => {
  const vertices = Array.from(STEP_ONE_VERTICES.values())

  return (
    <>
      {vertices.map((v, i) => (
        <Vertex key={`vertex-${i}`} position={v} />
      ))}
    </>
  )
}
