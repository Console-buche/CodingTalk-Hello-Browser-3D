import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { TalkMachineContext } from '../machines/talkMachine.context'

export const PostProcess = () => {
  const [state] = TalkMachineContext.useActor()

  if (state.context.currentStep >= 4 && state.context.currentStep < 6) {
    return null
  }

  return (
    <EffectComposer disableNormalPass multisampling={4}>
      <Bloom mipmapBlur luminanceThreshold={1} />
      <ToneMapping
        adaptive
        resolution={1024}
        middleGrey={0.5}
        maxLuminance={16.0}
        minLuminance={0}
        averageLuminance={4}
        adaptationRate={10}
      />
    </EffectComposer>
  )
}
