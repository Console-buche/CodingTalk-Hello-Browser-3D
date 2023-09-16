import { useMemo } from 'react'
import { DoubleSide } from 'three'
import { STEP_ONE_VERTICES } from './stepOne.constants'

export const Triangle = () => {
  const positions = useMemo(() => {
    return new Float32Array(Array.from(STEP_ONE_VERTICES.values()).flat())
  }, [])
  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={3} itemSize={3} />
      </bufferGeometry>
      <meshBasicMaterial side={DoubleSide} color="blue" />
    </mesh>
  )
}
