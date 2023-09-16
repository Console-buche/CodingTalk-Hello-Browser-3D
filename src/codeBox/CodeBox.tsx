import { javascript } from '@codemirror/lang-javascript'
import CodeMirror from '@uiw/react-codemirror'

export const CodeBox = () => (
  <CodeMirror
    basicSetup={{
      foldGutter: false,
      highlightActiveLine: false,
      lineNumbers: false
    }}
    value="console.log('hello world!');"
    height="200px"
    style={{ padding: 10, fontSize: 30 }}
    theme="dark"
    extensions={[javascript({ typescript: true, jsx: true })]}
  />
)
