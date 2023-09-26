import { KeyboardControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Perf } from 'r3f-perf'
import { Suspense, createContext, useContext, useState } from 'react'
import { Cam } from '../../cam/Cam'
import { PostProcess } from '../postprocess.tsx'
import { Steps } from '../steps/Steps'
import { StepFour } from '../steps/stepFour/StepFour.tsx'
import { StepOne } from '../steps/stepOne/StepOne'
import { StepTwo } from '../steps/stepTwo/StepTwo'
import { Color } from './Color.tsx'
import { Floor } from './Floor.tsx'
import { Player } from './Player'

//TODO: move the access to state away from root component to restore the perf
//FIXME: READ ABoVE

export const PhysicsContext = createContext<{
  setIsPhysicsPaused: undefined | ((hasPhysics: boolean) => void)
}>({ setIsPhysicsPaused: undefined })

export const Scene = () => {
  const [isPhysicsPaused, setIsPhysicsPaused] = useState(true)
  console.log('unpaused physics', isPhysicsPaused)

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
        <PhysicsContext.Provider value={{ setIsPhysicsPaused }}>
          {/* <ambientLight intensity={0.015} /> */}
          <Color />
          {/* <Perf position="bottom-right" /> */}
          <Cam />
          <Suspense>
            <Physics interpolate paused={isPhysicsPaused}>
              <Steps>
                <StepOne />
                <StepTwo />
                <StepFour />
              </Steps>
              <Player />
              <Floor />
            </Physics>
          </Suspense>

          <PostProcess />
        </PhysicsContext.Provider>
      </Canvas>
    </KeyboardControls>
  )
}
