import { CodeBox } from './codeBox/CodeBox'
import { Scene } from './components/scene/Scene'
import { Debug } from './debug/Debug'
import { TalkMachineContext } from './machines/talkMachine.context'

export const App = () => {
  return (
    <TalkMachineContext.Provider>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
        <Scene />
        <CodeBox />
        <Debug />
      </div>
    </TalkMachineContext.Provider>
  )
}
