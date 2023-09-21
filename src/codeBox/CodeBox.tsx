import { javascript } from '@codemirror/lang-javascript'
import CodeMirror from '@uiw/react-codemirror'
import { TalkMachineContext } from '../machines/talkMachine.context'

export const CodeBox = () => {
  const [state] = TalkMachineContext.useActor()

  const { codeSample } = state.context

  if (!codeSample) {
    return null
  }

  return (
    <CodeMirror
      basicSetup={{
        highlightActiveLine: false,
        foldGutter: true
      }}
      value={state.context.codeSample}
      style={{ padding: 10, fontSize: 30 }}
      theme="dark"
      extensions={[javascript({ typescript: true, jsx: true })]}
    />
  )
}
