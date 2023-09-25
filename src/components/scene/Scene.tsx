import { KeyboardControls, PointerLockControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Perf } from 'r3f-perf'
import { Suspense } from 'react'
import { Cam } from '../../cam/Cam'
import { TalkMachineContext } from '../../machines/talkMachine.context'
import { Steps } from '../steps/Steps'
import { StepFour } from '../steps/stepFour/StepFour.tsx'
import { StepOne } from '../steps/stepOne/StepOne'
import { StepThree } from '../steps/stepThree/StepThree.tsx'
import { StepTwo } from '../steps/stepTwo/StepTwo'
import { Color } from './Color.tsx'
import { Player } from './Player'
import { PostProcess } from '../postprocess.tsx'
import { Floor } from './Floor.tsx'

//TODO: move the access to state away from root component to restore the perf
//FIXME: READ ABoVE
//
export const Scene = () => {
  const [state] = TalkMachineContext.useActor()
  return (
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
        { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
        { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
        { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
        { name: 'jump', keys: ['Space'] }
      ]}
    >
      <Canvas
        dpr={[1, 2]}
        shadows
        flat
        gl={{ alpha: true, antialias: true }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }}
      >
        {/* <ambientLight intensity={0.015} /> */}
        <Color />
        <Perf position="bottom-right" />
        {state.context.currentStep < 3 && <Cam />}
        <Suspense>
          <Physics interpolate paused={state.context.currentStep < 3}>
            <Steps>
              {state.context.currentStep < 0.5 && <StepOne />}
              <StepTwo />
              <StepThree />
              {state.context.currentStep >= 4 && <StepFour />}
            </Steps>
            <Player />
            <Floor />
          </Physics>
        </Suspense>

        {state.context.currentStep >= 3 && <PointerLockControls />}
        <PostProcess />
      </Canvas>
    </KeyboardControls>
  )
}
