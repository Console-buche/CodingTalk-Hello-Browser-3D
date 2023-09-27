import { a, easings, useSpring } from '@react-spring/three'
import { useMemo } from 'react'
import { RepeatWrapping, TextureLoader } from 'three'
import { TalkMachineContext } from '../../machines/talkMachine.context'
import FloorAlbedo from '/albedo.jpg'
import { CuboidCollider } from '@react-three/rapier'
import { MeshReflectorMaterial } from '@react-three/drei'

export const Floor = () => {
  const [state] = TalkMachineContext.useActor()

  const TEX = useMemo(() => {
    const loader = new TextureLoader()
    return [
      loader.load(FloorAlbedo, t => {
        t.wrapS = t.wrapT = RepeatWrapping
        t.repeat.set(100, 100)
        return t
      })
    ]
  }, [])

  const { floorScale, reflectFloorScale, reflectFloorHeight } = useSpring({
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
      {/* <NonInstancedFollowers count={7400} /> */}
      {/* <InstancedFollowers count={5400} /> */}
      <a.mesh receiveShadow scale={reflectFloorScale} rotation-x={Math.PI * -0.5} position-y={reflectFloorHeight}>
        <planeGeometry args={[100, 100, 100]} />
        <MeshReflectorMaterial
          blur={[0, 0]} // Blur ground reflections (width, height), 0 skips blur
          mixBlur={0} // How much blur mixes with surface roughness (default = 1)
          mixStrength={1} // Strength of the reflections
          mixContrast={1} // Contrast of the reflections
          resolution={2048} // Off-buffer resolution, lower=faster, higher=better quality, slower
          mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
          depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
          minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
          maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
          depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
          distortion={1} // Amount of distortion based on the distortionMap texture
          debug={0} /* Depending on the assigned value, one of the following channels is shown:
      0 = no debug
      1 = depth channel
      2 = base channel
      3 = distortion channel
      4 = lod channel (based on the roughness)
    */
          reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
        />
      </a.mesh>
      {/* <a.mesh scale={floorScale} rotation-x={Math.PI * -0.5} receiveShadow position-y={-3.5}> */}
      {/*   <planeGeometry /> */}
      {/*   <meshStandardMaterial map={TEX[0]} /> */}
      {/* </a.mesh> */}
      {/**/}
      <CuboidCollider position={[0, -4.5, 0]} args={[110, 1, 110]} />
    </>
  )
}
