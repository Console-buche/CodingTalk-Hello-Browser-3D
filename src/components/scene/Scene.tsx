import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Suspense, createContext, useState } from 'react'
import { Controls } from '../../cam/Cam'
import { PostProcess } from '../postprocess.tsx'
import { Steps } from '../steps/Steps'
import { StepFour } from '../steps/stepFour/StepFour.tsx'
import { StepOne } from '../steps/stepOne/StepOne'
import { StepTwo } from '../steps/stepTwo/StepTwo'
import { Color } from './Color.tsx'
import { Floor } from './Floor.tsx'
import { Player } from './Player'
import './scene.css'

export const PhysicsContext = createContext<{
  setIsPhysicsPaused: undefined | ((hasPhysics: boolean) => void)
}>({ setIsPhysicsPaused: undefined })

export const Scene = () => {
  const [isPhysicsPaused, setIsPhysicsPaused] = useState(true)

  return (
    <Canvas shadows gl={{ alpha: true, antialias: true }} className="scene">
      <Controls>
        <PhysicsContext.Provider value={{ setIsPhysicsPaused }}>
          <Color />
          <Suspense>
            <Physics interpolate gravity={[0, -10, 0]} paused={isPhysicsPaused}>
              <StepOne />
              <StepTwo />
              <StepFour />
              <Player />
              <Floor />
            </Physics>
          </Suspense>
        </PhysicsContext.Provider>
      </Controls>

      <PostProcess />
    </Canvas>
  )
}
