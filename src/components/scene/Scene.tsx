import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { Cam } from '../../cam/Cam'
import { Steps } from '../steps/Steps'
import { StepOne } from '../steps/stepOne/StepOne'
import { StepTwo } from '../steps/stepTwo/StepTwo'
import { PostProcess } from '../postprocess'
import { TalkMachineContext } from '../../machines/talkMachine.context'
import { Color } from './Color.tsx'

export const Scene = () => {
  const [state] = TalkMachineContext.useActor()
  return (
    <Canvas
      gl={{ alpha: true, antialias: true }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }}
    >
      <Color />
      <Perf position="bottom-right" />
      <Cam />
      <Steps>
        {state.context.currentStep === 0 && <StepOne />}
        <StepTwo />
      </Steps>
      <PostProcess />
    </Canvas>
  )
}
