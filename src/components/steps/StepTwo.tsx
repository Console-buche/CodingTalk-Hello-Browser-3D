import { Box } from '@react-three/drei'
import { useContext } from 'react'
import { TempContext } from '../../App'

export const StepTwo = () => {
  const { color } = useContext(TempContext)
  return (
    <>
      <Box material-color={color} position-x={1} />
    </>
  )
}
