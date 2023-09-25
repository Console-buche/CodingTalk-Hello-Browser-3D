import { Box, Instance, Instances } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as React from 'react'
import { Group, Vector3 } from 'three'

export function NonInstancedFollowers({
  count = 3000,
  groupPosition = [0, 0, 0]
}: {
  count?: number
  groupPosition?: [number, number, number]
}) {
  const ref = React.useRef<Group>(null)
  const positions = React.useMemo(
    () =>
      Array.from({ length: count }, (_, i) => [
        -100 + Math.random() * 200,
        -100 + Math.random() * 200,
        -100 + Math.random() * 200
      ]),
    []
  )

  useFrame(() => {
    if (!ref.current) {
      return
    }

    ref.current.children.forEach(child => {
      child.lookAt(new Vector3(0, 0, 0))
    })
  })
  return (
    <group ref={ref} position={groupPosition}>
      {positions.map((position, i) => (
        <Box key={i} position={new Vector3(...position)} />
      ))}
    </group>
  )
}
