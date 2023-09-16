import { talkMachine } from './talkMachine'
import { createActorContext } from '@xstate/react'

export const TalkMachineContext = createActorContext(talkMachine)
