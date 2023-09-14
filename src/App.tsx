import { Scene } from './components/scene/Scene'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { createContext, useCallback, useState } from 'react'

export const TempContext = createContext({ color: 'blue' })

export const App = () => {
  const [color, setColor] = useState('blue')
  const onChange = useCallback((value, viewUpdate) => {
    console.log('value:', value)
    console.log(viewUpdate) //TODO: get the diff of he change from the leaf and pass it arround like so to update state
    setColor(value)
  }, [])
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
      <TempContext.Provider value={{ color }}>
        <Scene />
        <CodeMirror
          value="console.log('hello world!');"
          height="200px"
          theme="dark"
          extensions={[javascript({ typescript: true, jsx: true })]}
          onChange={onChange}
        />
      </TempContext.Provider>
    </div>
  )
}
