import { a, easings, useSpring } from '@react-spring/three'
import { Text } from '@react-three/drei'
import { TalkMachineContext } from '../../machines/talkMachine.context'

type StepTitle = {
  value: string
  step: number
  px: number
}

export const StepTitle = ({ value, step, px }: StepTitle) => {
  const [state] = TalkMachineContext.useActor()

  const { opacity } = useSpring({
    opacity: state.context.showStepTitle ? 1 : 0,
    config: {
      duration: 750,
      easing: easings.easeOutSine
    }
  })

  return (
    <group position-y={-2}>
      <Text outlineWidth={0.025} outlineColor={'white'} position-x={px} fontSize={5}>
        {/* @ts-ignore */}
        <a.meshBasicMaterial depthTest={false} color={state.context.color} opacity={opacity} transparent />
        {step}.
      </Text>
      <Text position-y={-0.25} position-x={px + 1} fontSize={1} anchorX="left">
        <a.meshBasicMaterial depthTest={false} opacity={opacity} transparent />
        {value}
      </Text>
    </group>
  )
}
