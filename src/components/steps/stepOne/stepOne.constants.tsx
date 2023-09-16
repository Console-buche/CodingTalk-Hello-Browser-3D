type Vertex = [number, number, number]
export type LinePoints = [Vertex, Vertex]

const p0: Vertex = [-0.5, 0, 0]
const p1: Vertex = [0.5, 0, 0]
const p2: Vertex = [0, 1, 0]

export const STEP_ONE_VERTICES = new Map<number, Vertex>([
  [0, p0],
  [1, p1],
  [2, p2]
])

export const STEP_ONE_LINEPOINTS = new Map<number, LinePoints>([
  [0, [p0, p1]],
  [1, [p1, p2]],
  [2, [p2, p0]]
])
