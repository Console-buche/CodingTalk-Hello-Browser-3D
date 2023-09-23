import { useState } from 'react'
import { TalkMachineContext } from '../../../machines/talkMachine.context'
import { a, useTrail } from '@react-spring/three'
import {
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshNormalMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
  MeshToonMaterial
} from 'three'
import { Plane } from '@react-three/drei'

const POSITIONS_X = [19, 21, 23, 19, 21, 23, 19, 21, 23]
const POSITIONS_Y = [2, 2, 2, 0, 0, 0, -2, -2, -2]
const MATERIALS = [
  new MeshBasicMaterial({ color: 'blue' }),
  new MeshBasicMaterial({ color: 'blue' }),
  new MeshBasicMaterial({ color: 'blue' }),
  new MeshBasicMaterial({ color: 'blue' }),
  new MeshPhongMaterial({ color: 'blue' }),
  new MeshLambertMaterial({ color: 'blue' }),
  new MeshNormalMaterial({}),
  new MeshStandardMaterial({ color: 'blue' }),
  new MeshToonMaterial({ color: 'green' })
]

export const Boxes = () => {
  const [state] = TalkMachineContext.useActor()
  const [open, setIsOpen] = useState(false)

  const trail = useTrail(9, {
    scale: state.context.currentStep >= 1 || open ? 1 : 0,
    from: { scale: state.context.currentStep === 1 || open ? 0 : 1 },
    config: {
      mass: 2,
      tension: 220
    }
  })

  return (
    <>
      <mesh receiveShadow castShadow onClick={() => setIsOpen(v => !v)} position-x={23} position-y={8}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial />
      </mesh>
      {trail.map(({ scale }, index) => (
        <a.mesh
          material={MATERIALS[index]}
          scale={scale}
          position-x={POSITIONS_X[index]}
          position-y={POSITIONS_Y[index]}
        >
          <boxGeometry args={[1, 1, 1]} />
        </a.mesh>
      ))}
    </>
  )
}
