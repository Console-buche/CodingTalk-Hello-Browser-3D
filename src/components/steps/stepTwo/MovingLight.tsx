import { Sphere } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { BackSide, Mesh } from 'three'
import { TalkMachineContext } from '../../../machines/talkMachine.context'
import { useSpring, easings, a } from '@react-spring/three'

export const MovingLight = () => {
  const [state] = TalkMachineContext.useActor()
  const ref = useRef<Mesh>(null)
  const refTwo = useRef<Mesh>(null)
  const refThree = useRef<Mesh>(null)

  const { py } = useSpring({
    py: state.context.currentStep >= 2 ? 0 : -20,
    config: {
      duration: 750,
      easing: easings.easeOutSine
    }
  })

  useFrame(() => {
    if (!ref.current || !refTwo.current || !refThree.current || state.context.currentStep < 2) {
      return null
    }

    ref.current.position.x = 20 + Math.sin(Date.now() * 0.001) * 4
    ref.current.position.y = -1 + Math.cos(Date.now() * 0.001) * 2
    ref.current.position.z = Math.cos(Date.now() * 0.001) * 1.2

    refTwo.current.position.x = 21 + Math.cos(Date.now() * -0.001) * 2
    refTwo.current.position.y = -1 + Math.sin(Date.now() * 0.001) * 2
    refTwo.current.position.z = 1 + Math.sin(Date.now() * 0.001)

    refThree.current.position.x = 20 + Math.sin(Date.now() * 0.001) * 4
    refThree.current.position.y = -1 + Math.tan(Date.now() * 0.001) * 2
    refThree.current.position.z = 1 + Math.abs(Math.cos(Date.now() * 0.001) * 1.2 + Math.sin(Date.now() * 0.001))
  })

  return (
    <a.group position-y={py}>
      <Sphere ref={ref} position={[0, 0, 0]} args={[0.01, 32, 32]}>
        <meshStandardMaterial color={0xffffff} emissive={'0xffffff'} emissiveIntensity={2} side={BackSide} />

        <pointLight
          intensity={3}
          power={300}
          distance={155}
          decay={1.5}
          color="brown"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
      </Sphere>
      <Sphere ref={refTwo} position={[0, 0, 0]} args={[0.01, 32, 32]}>
        <meshStandardMaterial color={0xffffff} emissive={'0xffffff'} emissiveIntensity={2} side={BackSide} />

        <pointLight
          intensity={3}
          power={300}
          color="pink"
          distance={155}
          decay={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
      </Sphere>
      <Sphere ref={refThree} position={[0, 0, 0]} args={[0.01, 32, 32]}>
        <meshStandardMaterial color={0xffffff} emissive={'0xffffff'} emissiveIntensity={2} side={BackSide} />

        <pointLight
          intensity={3}
          power={300}
          color={'yellow'}
          distance={155}
          decay={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
      </Sphere>
    </a.group>
  )
}
