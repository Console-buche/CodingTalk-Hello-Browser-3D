import { Instance, Instances } from '@react-three/drei'
import * as React from 'react'
import { Group, ShaderMaterial } from 'three'
import { fragmentShader, vertexShader } from './shader'

export function InstancedFollowers({ count = 3000 }: { count?: number }) {
  const materialRef = React.useRef<ShaderMaterial>(null)
  const ref = React.useRef<Group>(null)
  const uniforms = React.useMemo(
    () => ({
      time: { value: 1.0 },
      bounceHeight: { value: 5.0 }
    }),
    []
  )

  const instancePosition = React.useMemo(() => {
    const c = Array.from({ length: 3000 }, () => {
      const theta = Math.random() * Math.PI
      const phi = Math.random() * ((2 * Math.PI) / 8)
      const r = 25
      return [r * Math.sin(theta) * Math.cos(phi), r * Math.sin(theta) * Math.sin(phi), r * Math.cos(theta)]
    })
    const tIndex = new Float32Array(c.flat())

    return tIndex
  }, [count])

  return (
    <Instances limit={count}>
      <sphereGeometry args={[0.1, 32]}>
        <instancedBufferAttribute
          attach="attributes-instancePosition"
          array={instancePosition}
          itemSize={3}
          count={count}
        />
      </sphereGeometry>
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
      />
      {/* <meshBasicMaterial /> */}

      <group ref={ref}>
        {Array.from({ length: count }).map((_, i) => (
          <Instance key={i} />
        ))}
      </group>
    </Instances>
  )
}
