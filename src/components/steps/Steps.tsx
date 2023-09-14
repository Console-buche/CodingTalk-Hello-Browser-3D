import { ReactNode } from 'react'

type Steps = {
  children: ReactNode
}
export const Steps = ({ children }: Steps) => {
  return <>{children}</>
}
