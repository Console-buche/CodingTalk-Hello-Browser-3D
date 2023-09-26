import { useTrail } from '@react-spring/three'
import { RigidBody } from '@react-three/rapier'
import { useContext, useEffect, useMemo, useState } from 'react'
import {
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshMatcapMaterial,
  MeshNormalMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
  MeshToonMaterial,
  TextureLoader,
  Vector3
} from 'three'
import { TalkMachineContext } from '../../../machines/talkMachine.context'
import Manu from '/tex0.jpg'
import { PhysicsContext } from '../../scene/Scene'
import { Boxe } from './Boxe'
import { Box, Sphere } from '@react-three/drei'

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

export const Boxes = () => {
  const [state] = TalkMachineContext.useActor()
  const { setIsPhysicsPaused } = useContext(PhysicsContext)
  const [open, setIsOpen] = useState(false)

  useEffect(() => {
    if (setIsPhysicsPaused && state.context.currentStep >= 3) {
      setIsPhysicsPaused(false)
    }
  }, [state.context.currentStep])

  const TEX = useMemo(() => {
    const loader = new TextureLoader()
    return [loader.load(Manu)]
  }, [])

  const trail = useTrail(9, {
    scale: state.context.currentStep >= 1 || open ? 1 : 0,
    roty: state.context.currentStep >= 2.5 || open ? 0 : Math.PI,
    from: {
      scale: state.context.currentStep === 1 || open ? 0 : 1,
      roty: state.context.currentStep === 1 || open ? Math.PI : 0
    },
    config: {
      mass: 2,
      tension: 220
    }
  })

  const AThousandBoxes = useMemo(
    () =>
      Array.from({ length: 100 }, (_, i) => ({
        index: `AThousandBoxes${i}`,
        position: new Vector3(15 + Math.random() * 30, 15 + Math.random() * i, 1 + Math.random() * -10),
        rotation: [Math.random() * 10, Math.random() * 10, Math.random() * 10],
        density: 3 + Math.random() * 15
      })),
    []
  )

  return (
    <>
      {/* <NonInstancedFollowers count={7400} /> */}
      {/* <InstancedFollowers count={5400} /> */}

      {trail.map(({ scale, roty }, index) => (
        <RigidBody key={`boxes-${index}`} colliders="cuboid" shape="cuboid" density={10}>
          <Boxe
            material={MATERIALS[index]}
            posx={POSITIONS_X[index]}
            posy={POSITIONS_Y[index]}
            tex={TEX[index]}
            scale={scale}
            roty={roty}
            index={index}
          />
        </RigidBody>
      ))}

      {AThousandBoxes.map(({ index, position, rotation }, i) => (
        <>
          {i % 2 === 0 ? (
            <RigidBody
              key={index}
              rotation={rotation}
              position={position}
              colliders="cuboid"
              shape="cuboid"
              density={10}
            >
              <Box material={MATERIALS[6]} />{' '}
            </RigidBody>
          ) : (
            <RigidBody key={index} rotation={rotation} position={position} colliders="ball" shape="ball" density={10}>
              <Sphere material={MATERIALS[6]} />
            </RigidBody>
          )}
        </>
      ))}
    </>
  )
}
