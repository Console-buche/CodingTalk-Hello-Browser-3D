import { Line } from '@react-three/drei'
import { useSpring, easings, a } from '@react-spring/three'
import { LinePoints } from '../../stepOne.constants'

type Edge = {
  index: number // This will be used for animating delay between each vertex apparition
  points: LinePoints
}
export const Edge = ({ points }: Edge) => {
  const { scale } = useSpring({
    from: { scale: 0.05 },
    to: [{ scale: 1 }],
    config: {
      easing: easings.easeOutBounce,
      duration: 850
    }
  })
  return (
    <a.group scale={scale}>
      <Line depthWrite={false} lineWidth={12} points={points} color="white" />
    </a.group>
  )
}
