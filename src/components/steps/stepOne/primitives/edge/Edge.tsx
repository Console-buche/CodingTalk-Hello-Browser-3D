import { Line } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js'
import { LinePoints } from '../../stepOne.constants'

type Edge = {
  index: number // This will be used for animating delay between each vertex apparition
  points: LinePoints
}
export const Edge = ({ points }: Edge) => {
  const lineRef = useRef<Line2 | LineSegments2>(null)
  let initialGapSize = 3

  useFrame(() => {
    if (lineRef.current) {
      const dashSize = lineRef.current.material.dashSize
      lineRef.current.material.dashSize = dashSize < initialGapSize ? dashSize + 0.1 : initialGapSize
    }
  })

  return (
    <Line
      ref={lineRef}
      dashed
      dashSize={0}
      gapSize={initialGapSize}
      depthWrite={false}
      color="white"
      lineWidth={12}
      points={points}
    />
  )
}
