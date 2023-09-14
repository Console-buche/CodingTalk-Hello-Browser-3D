import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Steps } from '../steps/Steps'
import { StepOne } from '../steps/StepOne'
import { StepTwo } from '../steps/StepTwo'

export const Scene = () => {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }}>
      <OrbitControls />
      <Steps>
        <StepOne />
        <StepTwo />
      </Steps>
    </Canvas>
  )
}
