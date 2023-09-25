import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'

const SPEED = 0.1
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

export function Player() {
  const [, get] = useKeyboardControls()
  useFrame(state => {
    const { forward, backward, left, right } = get()
    frontVector.set(0, 0, forward ? -1 : backward ? 1 : 0)
    sideVector.set(right ? -1 : left ? 1 : 0, 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(state.camera.rotation)
    state.camera.position.add(direction)
  })
  return null
}
