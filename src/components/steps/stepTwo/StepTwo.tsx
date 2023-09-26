import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group } from 'three'
import { StepTitle } from '../StepTitle'
import { Boxes } from './Boxes'
import { MovingLight } from './MovingLight'

export const StepTwo = () => {
  const ref = useRef<Group>(null)

  useFrame(() => {
    if (!ref.current) {
      return null
    }
  })

  return (
    <>
      <group ref={ref}>
        <Boxes />
        <MovingLight />
      </group>
      <StepTitle value="lights and colors" step={2} px={18} />
    </>
  )
}
