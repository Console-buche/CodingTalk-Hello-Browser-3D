import { a, useTrail } from '@react-spring/three'
import { useState } from 'react'
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

const POSITIONS_X = [19, 21, 23, 19, 21, 23, 19, 21, 23]
const POSITIONS_Y = [1.5, 1.5, 1.5, -0.5, -0.5, -0.5, -2.5, -2.5, -2.5]
const MATERIALS = [
  new MeshPhongMaterial({ color: 'blue' }),
  new MeshBasicMaterial({ color: 'blue' }),
  new MeshToonMaterial({ color: 'green' }),
  new MeshBasicMaterial({ color: 'blue' }),
  new MeshLambertMaterial({ color: 'blue' }),
  new MeshBasicMaterial({ color: 'blue' }),
  new MeshStandardMaterial({ color: 'blue' }),
  new MeshMatcapMaterial({ color: 'blue' }),
  new MeshNormalMaterial({})
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
