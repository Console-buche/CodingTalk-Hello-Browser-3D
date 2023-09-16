import { Line } from '@react-three/drei'
import { LinePoints } from '../stepOne.constants'

type Edge = {
  index: number // This will be used for animating delay between each vertex apparition
  points: LinePoints
}
export const Edge = ({ points }: Edge) => {
  return <Line lineWidth={12} points={points} color="white" />
}
