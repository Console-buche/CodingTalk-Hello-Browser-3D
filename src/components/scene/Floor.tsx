import { a, easings, useSpring } from '@react-spring/three'
import { TalkMachineContext } from '../../machines/talkMachine.context'
import { CuboidCollider } from '@react-three/rapier'
import { MeshReflectorMaterial } from '@react-three/drei'

export const Floor = () => {
  const [state] = TalkMachineContext.useActor()

  const { reflectFloorScale, reflectFloorHeight } = useSpring({
    floorScale: state.context.currentStep >= 4 ? 120 : 0,
    reflectFloorScale: state.context.currentStep >= 0.5 && state.context.currentStep < 4 ? 120 : 0,
    reflectFloorHeight: state.context.currentStep >= 0.5 && state.context.currentStep < 4 ? -3.5 : -6,

    config: {
      duration: 750,
      easing: easings.easeOutSine
    }
  })

  return (
    <>
      <a.mesh receiveShadow scale={reflectFloorScale} rotation-x={Math.PI * -0.5} position-y={reflectFloorHeight}>
        <planeGeometry args={[100, 100, 100]} />
        <MeshReflectorMaterial
          blur={[0, 0]}
          mixBlur={0}
          mixStrength={1}
          mixContrast={1}
          resolution={2048}
          mirror={0}
          depthScale={0}
          minDepthThreshold={0.9}
          maxDepthThreshold={1}
          distortion={1}
          reflectorOffset={0.2}
        />
      </a.mesh>

      <CuboidCollider position={[0, -4.5, 0]} args={[110, 1, 110]} />
    </>
  )
}
