import { LinePoints } from '../../stepOne.constants'
import { Edge } from './Edge'

export const Edges = ({ points }: { points: LinePoints[] }) => {
  return (
    <>
      {points.map((v, i) => (
        <Edge key={`line-${i}`} index={i} points={v} />
      ))}
    </>
  )
}
