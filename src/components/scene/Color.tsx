import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Color as Col } from 'three'
import { TalkMachineContext } from '../../machines/talkMachine.context'

export const Color = () => {
  const [state] = TalkMachineContext.useActor()
  const ref = useRef<Col>(null)

  useFrame(() => {
    if (!ref.current) {
      return
    }
    ref.current.lerp(state.context.color, 0.1)
  })

  return (
    <>
      {state.context.currentStep >= 6 && <ambientLight />}
      <color ref={ref} attach="background" />
    </>
  )
}
