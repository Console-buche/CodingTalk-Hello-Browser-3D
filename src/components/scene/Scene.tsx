import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { Cam } from '../../cam/Cam'
import { Steps } from '../steps/Steps'
import { StepOne } from '../steps/stepOne/StepOne'
import { StepTwo } from '../steps/stepTwo/StepTwo'
import { PostProcess } from '../postprocess'
import { TalkMachineContext } from '../../machines/talkMachine.context'
import { Color } from './Color.tsx'
import { CuboidCollider, Physics } from '@react-three/rapier'
import { Suspense } from 'react'
import { StepThree } from '../steps/stepThree/StepThree.tsx'
import { KeyboardControls, PointerLockControls } from '@react-three/drei'
import { Player } from './Player'

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
        shadows
        gl={{ alpha: true, antialias: true }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }}
      >
        <Color />
        <Perf position="bottom-right" />
        {state.context.currentStep < 3 && <Cam />}
        <Suspense>
          <Physics interpolate paused={state.context.currentStep < 3}>
            <Steps>
              {state.context.currentStep < 0.5 && <StepOne />}
              <StepTwo />
              <StepThree />
            </Steps>
            <Player />
            {/* Floor */}
            <CuboidCollider position={[0, -4.5, 0]} args={[110, 1, 110]} />
          </Physics>
        </Suspense>
        <PostProcess />
        <PointerLockControls />
      </Canvas>
    </KeyboardControls>
  )
}
