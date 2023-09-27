import { CodeBox } from './codeBox/CodeBox'
import { Scene } from './components/scene/Scene'
import { Debug } from './debug/Debug'
import { TalkMachineContext } from './machines/talkMachine.context'
import './index.css'

export const App = () => {
  return (
    <TalkMachineContext.Provider>
      <div className="appContainer">
        <Scene />
        <CodeBox />
        <Debug />
      </div>
    </TalkMachineContext.Provider>
  )
}
