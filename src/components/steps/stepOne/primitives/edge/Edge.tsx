import { Line } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js'
import { LinePoints } from '../../stepOne.constants'

type Edge = {
  index: number // This will be used for animating delay between each vertex apparition
  points: LinePoints
}
export const Edge = ({ points, index }: Edge) => {
  const lineRef = useRef<Line2 | LineSegments2>(null)
  const [isReady, setIsReady] = useState(false)
  const initialGapSize = 3
  const delayBeforeEdgeDraw = 200

  useEffect(() => {
    const timeout = setTimeout(() => setIsReady(true), index * delayBeforeEdgeDraw)

    return () => clearTimeout(timeout)
  }, [index])

  useFrame(() => {
    if (lineRef.current && isReady && lineRef.current.material.dashSize < initialGapSize) {
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
