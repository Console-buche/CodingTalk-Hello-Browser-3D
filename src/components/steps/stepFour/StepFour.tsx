import { SpotLight } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { type SpotLight as SpotL } from 'three'

export const StepFour = () => {
  const ref = useRef<SpotL>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }
    ref.current.target.position.set(20, 0, 10)
    ref.current.target.updateMatrixWorld()
  }, [ref.current])

  return (
    <>
      <SpotLight
        opacity={0.3}
        distance={7}
        angle={0.25}
        ref={ref}
        intensity={10}
        attenuation={4.75}
        position={[20, 0.1, 10]}
      />
    </>
  )
}
