import { useTrail } from '@react-spring/three'
import { RigidBody } from '@react-three/rapier'
import { useContext, useEffect } from 'react'
import {
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshMatcapMaterial,
  MeshNormalMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
  MeshToonMaterial
} from 'three'
import { TalkMachineContext } from '../../../machines/talkMachine.context'
import { PhysicsContext } from '../../scene/Scene'
import { Boxe } from './Boxe'

const POSITIONS_X = [19, 21, 23, 19, 21, 23, 19, 21, 23]
const POSITIONS_Y = [1.5, 1.5, 1.5, -0.5, -0.5, -0.5, -2.5, -2.5, -2.5]
const MATERIALS = [
  new MeshPhongMaterial({ color: 'blue', emissiveIntensity: 2 }),
  new MeshBasicMaterial({ color: 'blue' }),
  new MeshToonMaterial({ color: 'green', emissiveIntensity: 2 }),
  new MeshBasicMaterial({ color: 'blue' }),
  new MeshLambertMaterial({ color: 'blue', emissiveIntensity: 2 }),
  new MeshBasicMaterial({ color: 'blue' }),
  new MeshStandardMaterial({ color: 'blue', emissiveIntensity: 2 }),
  new MeshMatcapMaterial({ color: 'blue' }),
  new MeshNormalMaterial({})
]

export const Grid = () => {
  const [state] = TalkMachineContext.useActor()

  const { setIsPhysicsPaused } = useContext(PhysicsContext)

  useEffect(() => {
    if (setIsPhysicsPaused && state.context.currentStep >= 3) {
      setIsPhysicsPaused(false)
    }
  }, [state.context.currentStep])

  const trail = useTrail(9, {
    scale: state.context.currentStep >= 1 ? 1 : 0,
    roty: state.context.currentStep >= 2.5 ? 0 : Math.PI,
    from: {
      scale: state.context.currentStep === 1 ? 0 : 1,
      roty: state.context.currentStep === 1 ? Math.PI : 0
    },
    config: {
      mass: 2,
      tension: 220
    }
  })
  return (
    <>
      {trail.map(({ scale, roty }, index) => (
        <RigidBody key={`boxes-${index}`} colliders="cuboid" shape="cuboid" density={10}>
          <Boxe
            material={MATERIALS[index]}
            posx={POSITIONS_X[index]}
            posy={POSITIONS_Y[index]}
            scale={scale}
            roty={roty}
            index={index}
          />
        </RigidBody>
      ))}
    </>
  )
}
