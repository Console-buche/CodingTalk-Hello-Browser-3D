import { RigidBody } from '@react-three/rapier'
import { useContext, useEffect, useMemo, useState } from 'react'
import {
  Euler,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshMatcapMaterial,
  MeshNormalMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
  MeshToonMaterial,
  Vector3
} from 'three'
import { TalkMachineContext } from '../../../machines/talkMachine.context'
import { PhysicsContext } from '../../scene/Scene'
import { Sphere, Box } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { Grid } from './Grid'
const MATERIALS = [
  new MeshPhongMaterial({ color: 'blue', emissiveIntensity: 2 }),
  new MeshBasicMaterial({ color: 'blue' }),
  new MeshToonMaterial({ color: 'green', emissiveIntensity: 2 }),
  new MeshBasicMaterial({ color: 'blue' }),
  new MeshLambertMaterial({ color: 'orange', emissiveIntensity: 2 }),
  new MeshBasicMaterial({ color: 'blue' }),
  new MeshStandardMaterial({ color: 'blue', emissiveIntensity: 2 }),
  new MeshMatcapMaterial({ color: 'blue' }),
  new MeshNormalMaterial({})
]

type SpheresToShoot = { position: Vector3; direction: Vector3 }[]

export const Boxes = () => {
  const [state] = TalkMachineContext.useActor()

  const { camera } = useThree()
  const { setIsPhysicsPaused } = useContext(PhysicsContext)
  const [spheresToShoot, setSpheresToShoot] = useState<SpheresToShoot>([])

  const handleMouseDown = () => (spheresToShoot: SpheresToShoot) => {
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
  }, [])

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

  const AThousandBoxes = useMemo(
    () =>
      Array.from({ length: 100 }, (_, i) => ({
        index: `AThousandBoxes${i}`,
        position: new Vector3(15 + Math.random() * 30, 15 + Math.random() * i, 1 + Math.random() * -10),
        rotation: new Euler().fromArray([Math.random() * 10, Math.random() * 10, Math.random() * 10]),
        density: 3 + Math.random() * 15
      })),
    []
  )

  return (
    <>
      <Grid />
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
          linearVelocity={sphere.direction.clone().multiplyScalar(20).toArray()}
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
