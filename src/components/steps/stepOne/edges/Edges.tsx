import { STEP_ONE_LINEPOINTS } from '../stepOne.constants'
import { Edge } from './Edge'

export const Edges = () => {
  const points = Array.from(STEP_ONE_LINEPOINTS.values())
  return (
    <>
      {points.map((v, i) => (
        <Edge key={`line-${i}`} index={i} points={v} />
      ))}
    </>
  )
}
