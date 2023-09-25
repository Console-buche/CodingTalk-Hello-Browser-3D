import { a, useTrail } from '@react-spring/three'
import { Plane } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useMemo, useState } from 'react'
import {
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshMatcapMaterial,
  MeshNormalMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
  MeshToonMaterial,
  TextureLoader
} from 'three'
import { TalkMachineContext } from '../../../machines/talkMachine.context'
import Manu from '/tex0.jpg'

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
  const [open, setIsOpen] = useState(false)

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

  return (
    <>
      {/* <NonInstancedFollowers count={7400} /> */}
      {/* <InstancedFollowers count={5400} /> */}

      {trail.map(({ scale, roty }, index) => (
        <RigidBody key={`boxes-${index}`} colliders="cuboid" shape="cuboid" density={10}>
          <a.mesh
            material={MATERIALS[index]}
            castShadow
            scale={scale}
            rotation-y={roty}
            position-x={POSITIONS_X[index]}
            position-y={POSITIONS_Y[index]}
          >
            <Plane renderOrder={2} position-z={0.5}>
              <meshStandardMaterial
                map={TEX[index]}
                emissiveMap={TEX[index]}
                emissiveIntensity={2}
                depthTest={false}
                toneMapped={false}
              />
            </Plane>
            <boxGeometry args={[1, 1, 1]} />
          </a.mesh>
        </RigidBody>
      ))}
    </>
  )
}
