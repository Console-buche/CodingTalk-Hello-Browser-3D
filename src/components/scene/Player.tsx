import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'
import { TalkMachineContext } from '../../machines/talkMachine.context'

const SPEED = 0.1
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

export function Player() {
  const [, get] = useKeyboardControls()
  const [state, event] = TalkMachineContext.useActor()

  const fadeToBlack = (roty: number) => {
    if (state.context.currentStep !== 3) {
      return
    }
    if (Math.abs(roty) > 1.3) {
      event({ type: 'fadeToBlack' })
    }
  }

  useFrame(({ camera }) => {
    const { forward, backward, left, right } = get()
    frontVector.set(0, 0, forward ? -1 : backward ? 1 : 0)
    sideVector.set(right ? -1 : left ? 1 : 0, 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation)
    camera.position.add(direction)

    if (state.context.currentStep >= 6) {
      camera.position.setY(-1.5)
    }
    fadeToBlack(camera.rotation.y)
  })
  return null
}
