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
const p5: Vertex = [-1, 1, -2]
const p6: Vertex = [1, -1, -2]
const p7: Vertex = [1, 1, -2]

export const STEP_ONE_VERTICES_REST = new Map<number, Vertex>([
  [3, p3],
  [4, p4],
  [5, p5],
  [6, p6],
  [7, p7]
])

export const STEP_ONE_LINEPOINTS_REST = new Map<number, LinePoints>([
  [3, [p2, p3]],
  [4, [p3, p0]],
  [5, [p4, p3]],
  [6, [p4, p5]],
  [7, [p4, p0]],
  [8, [p5, p3]],
  [9, [p5, p7]],
  [10, [p7, p3]],
  [11, [p7, p2]],
  [12, [p1, p7]],
  [13, [p6, p1]],
  [14, [p6, p7]],
  [15, [p7, p3]],
  [16, [p4, p6]],
  [17, [p4, p5]],
  [18, [p7, p5]],
  [19, [p1, p4]],
  [20, [p6, p5]],
  [21, [p0, p2]]
])

export type VerticesTriangle = [Vertex, Vertex, Vertex]

export const STEP_ONE_TRIANGLES_REST = new Map<number, VerticesTriangle>([
  [1, [p0, p1, p2]],
  [2, [p2, p3, p0]],
  [3, [p4, p5, p3]],
  [4, [p3, p0, p4]],
  [5, [p1, p6, p7]],
  [6, [p7, p2, p1]],
  [7, [p4, p0, p1]],
  [8, [p1, p6, p4]],
  [9, [p5, p4, p6]],
  [10, [p6, p7, p5]],
  [11, [p3, p2, p7]],
  [12, [p7, p5, p3]]
])
