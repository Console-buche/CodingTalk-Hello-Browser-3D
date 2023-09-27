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
import { useFrame, useThree } from '@react-three/fiber'

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

  const { camera } = useThree()
  const { setIsPhysicsPaused } = useContext(PhysicsContext)
  const [open, setIsOpen] = useState(false)
  const [spheresToShoot, setSpheresToShoot] = useState([])

  const handleMouseDown = () => {
    if (state.context.currentStep < 6) {
      return
    }
    const direction = new Vector3()
    camera.getWorldDirection(direction)
    const initialPosition = camera.position.clone().add(direction.multiplyScalar(2))
    setSpheresToShoot([...spheresToShoot, { position: initialPosition, direction }])
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown)
    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
    }
  }, [spheresToShoot])

  useEffect(() => {
    if (setIsPhysicsPaused && state.context.currentStep >= 3) {
      setIsPhysicsPaused(false)
    }
  }, [state.context.currentStep])

  useFrame(() => {
    setSpheresToShoot(spheres =>
      spheres.map(sphere => ({
        position: sphere.position.add(sphere.direction.clone().multiplyScalar(0.1)),
        direction: sphere.direction
      }))
    )
  })

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
        <group key={index}>
          {i % 2 === 0 ? (
            <RigidBody rotation={rotation} position={position} colliders="cuboid" shape="cuboid" density={10}>
              <Box material={MATERIALS[6]} />
            </RigidBody>
          ) : (
            <RigidBody rotation={rotation} position={position} colliders="ball" shape="ball" density={10}>
              <Sphere material={MATERIALS[6]} />
            </RigidBody>
          )}
        </group>
      ))}
      {spheresToShoot.map((sphere, index) => (
        <RigidBody
          linearVelocity={sphere.direction.clone().multiplyScalar(20)}
          key={index}
          position={sphere.position}
          colliders="ball"
          shape="ball"
          scale={0.7}
          friction={8.9}
          density={22}
        >
          <Sphere scale={0.7} material={MATERIALS[6]} />
        </RigidBody>
      ))}
    </>
  )
}
