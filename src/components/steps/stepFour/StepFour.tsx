import { Html, SpotLight } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { type SpotLight as SpotL } from 'three'
import { TalkMachineContext } from '../../../machines/talkMachine.context'
import { ScientistModel } from './ScientistModel'
import { PsyCanon } from './Weapon'
import './StepFour.css'
import { StepTitle } from '../StepTitle'

const posScientist = [20, -3.4, 30.5] as const
const posScientistSpotlight = [20, 0.4, 30] as const
const posGun = [18, -2.9, 33] as const

const posGunSpotlight = [18, 0.4, 33] as const

export const StepFour = () => {
  const [state] = TalkMachineContext.useActor()
  const ref = useRef<SpotL>(null)
  const refTwo = useRef<SpotL>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }
    ref.current.target.position.set(posScientist[0], posScientist[1] - 1, posScientist[2])
    ref.current.target.updateMatrixWorld()

    if (!ref.current || !refTwo.current) {
      return
    }

    refTwo.current.target.position.set(posGun[0], posGun[1] - 1, posGun[2])
    refTwo.current.target.updateMatrixWorld()
  }, [ref.current])

  return (
    <>
      <SpotLight
        opacity={0.3}
        distance={7}
        angle={0.45}
        ref={ref}
        intensity={15}
        attenuation={4.75}
        position={posScientistSpotlight}
      />
      <ScientistModel position={posScientist} scale={0.03} />

      <StepTitle value="controls and models" step={4} contextStep={4} px={30} pz={20} ry={Math.PI} />
      <SpotLight
        opacity={0.3}
        distance={7}
        angle={0.15}
        ref={refTwo}
        intensity={5}
        attenuation={2.75}
        position={posGunSpotlight}
      />
      <PsyCanon position={posGun} scale={1.5} />
      {state.context.currentStep >= 5 && (
        <Html position={posScientist} position-x={posScientist[0] + 2.5} position-y={posScientist[1] + 3.5}>
          {/* html for a simple dialog hud box in a video game */}
          <div className="dialog">
            <span className="dialog-name">Scientist</span>
            <span className="dialog-message">
              "Hey you, made it this far uh? Here's a little something for you. Good luck finding the way out."
            </span>
          </div>
        </Html>
      )}
    </>
  )
}
