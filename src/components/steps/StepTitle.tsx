import { a, easings, useSpring } from '@react-spring/three'
import { Text } from '@react-three/drei'
import { TalkMachineContext } from '../../machines/talkMachine.context'

type StepTitle = {
  value: string
  step: number // used for display
  contextStep: number // used for syncing machine
  px: number
  pz?: number
  ry?: number
}

export const StepTitle = ({ value, step, px, pz, ry, contextStep }: StepTitle) => {
  const [state] = TalkMachineContext.useActor()

  console.log(contextStep, state.context.currentStep)
  const { opacity } = useSpring({
    opacity: state.context.showStepTitle && state.context.currentStep === contextStep ? 1 : 0,
    config: {
      duration: 750,
      easing: easings.easeOutSine
    }
  })

  return (
    <group position-y={-2} rotation-y={ry} position-z={pz} position-x={px}>
      <Text outlineWidth={0.025} outlineColor={'white'} fontSize={5}>
        {/* @ts-ignore */}
        <a.meshBasicMaterial depthTest={false} color={state.context.color} opacity={opacity} transparent />
        {step}.
      </Text>
      <Text position-y={-0.25} fontSize={1} position-x={1} anchorX="left">
        <a.meshBasicMaterial depthTest={false} opacity={opacity} transparent />
        {value}
      </Text>
    </group>
  )
}
