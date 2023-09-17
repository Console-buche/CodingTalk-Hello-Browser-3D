export type Vertex = [number, number, number]
export type LinePoints = [Vertex, Vertex]

// Original vertices
const p0: Vertex = [-1, -1, 0]
const p1: Vertex = [1, -1, 0]
const p2: Vertex = [1, 1, 0]

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

// Additional vertices
const p3: Vertex = [-1, 1, 0]
const p4: Vertex = [-1, -1, -2]
const p5: Vertex = [1, -1, -2]
const p6: Vertex = [1, 1, -2]
const p7: Vertex = [-1, 1, -2]

export const STEP_ONE_VERTICES_REST = new Map<number, Vertex>([
  [3, p3],
  [4, p4],
  [5, p5],
  [6, p6],
  [7, p7]
])

export const STEP_ONE_LINEPOINTS_REST = new Map<number, LinePoints>([
  [3, [p3, p0]],
  [4, [p3, p2]],
  [5, [p4, p5]],
  [6, [p5, p6]],
  [7, [p6, p7]],
  [8, [p7, p4]],
  [9, [p4, p0]],
  [10, [p5, p1]],
  [11, [p6, p2]],
  [12, [p7, p3]]
])
