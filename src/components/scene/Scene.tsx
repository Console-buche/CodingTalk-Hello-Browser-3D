import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { Cam } from '../../cam/Cam'
import { Steps } from '../steps/Steps'
import { StepOne } from '../steps/stepOne/StepOne'

export const Scene = () => {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }}>
      <Perf position="bottom-right" />
      <Cam />
      <Steps>
        <StepOne />
        {/* <StepTwo /> */}
      </Steps>
    </Canvas>
  )
}
