import { SpringValue, a, easings, useSpring } from '@react-spring/three'
import { Material, Texture } from 'three'
import { Plane } from '@react-three/drei'
import { useReducer } from 'react'
import { TalkMachineContext } from '../../../machines/talkMachine.context'

type Boxe = {
  roty: SpringValue<number>
  scale: SpringValue<number>
  tex: Texture
  index: number
  posy: number
  posx: number
  material: Material
}

export const Boxe = ({ tex, scale, roty, material, posx, posy }: Boxe) => {
  const [state] = TalkMachineContext.useActor()
  const [hover, toggleHover] = useReducer(v => !v, false)
  const { rotx, opacity } = useSpring({
    opacity: state.context.currentStep < 4 ? 1 : 0,
    rotx: hover ? Math.PI : 0,
    config: {
      duration: 550,
      easing: easings.easeInOutBack
    }
  })

  return (
    <a.mesh
      onClick={() => toggleHover()}
      material={material}
      castShadow
      scale={scale}
      rotation-x={rotx}
      rotation-y={roty}
      material-transparent
      material-opacity={opacity}
      position-x={posx}
      position-y={posy}
    >
      <boxGeometry args={[1, 1, 1]} />
    </a.mesh>
  )
}
