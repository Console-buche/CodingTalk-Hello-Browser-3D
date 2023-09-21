import { createMachine, assign } from 'xstate'

export const talkMachine = createMachine(
  {
    context: {
      codeSample: '',
      stepOneVerticesCount: 0,
      stepOneTrianglesRestCount: 0,
      stepOneVerticesRestCount: 0
    },
    id: 'talk',
    initial: 'notStarted',
    states: {
      notStarted: {
        on: {
          start: {
            target: 'stepOne'
          }
        }
      },
      stepOne: {
        initial: 'helloWorld',
        states: {
          helloWorld: {
            entry: assign(context => {
              return { ...context, codeSample: 'This is not a triangle.' }
            }),
            on: {
              showOneVertex: {
                target: 'oneVertexVisible',
                actions: {
                  type: 'addVertex',
                  params: {}
                }
              }
            }
          },
          oneVertexVisible: {
            on: {
              addVertices: {
                target: 'isMissingVertices',
                actions: {
                  type: 'addVertex',
                  params: {}
                }
              }
            }
          },
          isMissingVertices: {
            after: {
              '100': [
                {
                  target: '#talk.stepOne.isMissingVertices',
                  cond: 'hasLessThanThreeVertices',
                  actions: [
                    {
                      type: 'addVertex',
                      params: {}
                    }
                  ]
                },
                {
                  target: '#talk.stepOne.hasThreeVertices',
                  cond: 'hasThreeVertices',
                  actions: []
                }
              ]
            }
          },
          hasThreeVertices: {
            on: {
              addRestVertices: {
                target: 'hasNotAllVerticesShowing',
                actions: {
                  type: 'addRestVertex',
                  params: {}
                }
              }
            }
          },
          hasNotAllVerticesShowing: {
            after: {
              '30': [
                {
                  target: '#talk.stepOne.hasNotAllVerticesShowing',
                  cond: 'hasNotAllVertices',
                  actions: [
                    {
                      type: 'addRestVertex',
                      params: {}
                    }
                  ]
                },
                {
                  target: '#talk.stepOne.hasAllVertices',
                  cond: 'hasAllVertices',
                  actions: []
                }
              ]
            }
          },
          hasAllVertices: {
            exit: assign(context => {
              return { ...context, codeSample: 'Painting faces!' }
            }),
            on: {
              addRestTriangles: {
                target: 'hasNotAllTrianglesShowing',
                actions: {
                  type: 'addRestTriangle',
                  params: {}
                }
              }
            }
          },
          hasNotAllTrianglesShowing: {
            after: {
              '500': [
                {
                  target: '#talk.stepOne.hasNotAllTrianglesShowing',
                  cond: 'hasNotAllTriangles',
                  actions: [
                    {
                      type: 'addRestTriangle',
                      params: {}
                    }
                  ]
                },
                {
                  target: '#talk.stepOne.hasAllTriangles',
                  cond: 'hasAllTriangles',
                  actions: []
                }
              ]
            }
          },
          hasAllTriangles: {
            entry: assign(context => {
              return {
                ...context,
                codeSample: `<mesh>
  <geometry />
  <material />
</mesh>`
              }
            }),
            on: {
              addRestTriangles: {
                target: 'hasAllTriangles',
                actions: {
                  type: 'addRestTriangle',
                  params: {}
                }
              }
            }
          }
        }
      }
    },
    schema: {
      events: {} as
        | { type: 'start' }
        | { type: 'showOneVertex' }
        | { type: 'addVertices' }
        | { type: 'addRestVertices' }
        | { type: 'addRestTriangles' }
    },
    predictableActionArguments: true,
    preserveActionOrder: true
  },
  {
    actions: {
      addVertex: assign(context => {
        const newVerticesCount = context.stepOneVerticesCount + 1
        const lines = Array.from({ length: newVerticesCount }, (_, i) => `const point${i} = new Vector3(x, y, z)`)
        const codeSample = lines.join('\n')
        console.log('adding vertices')
        return {
          ...context,
          // codeSample: JSON.stringify(codeSample),
          codeSample,
          stepOneVerticesCount: newVerticesCount
        }
      }),
      addRestVertex: assign(context => {
        const newVerticesCount = context.stepOneVerticesRestCount + 1
        console.log('adding rest vertices')
        const codeSample = `const geometry = new BufferGeometry()
[...x${newVerticesCount}]`
        return {
          ...context,
          codeSample,
          stepOneVerticesRestCount: newVerticesCount
        }
      }),
      addRestTriangle: assign(context => {
        const newTrianglesCount = context.stepOneTrianglesRestCount + 1
        console.log('adding rest triangles')
        return {
          ...context,
          stepOneTrianglesRestCount: newTrianglesCount
        }
      })
    },
    services: {},
    guards: {
      hasNotAllVertices: (context, event) => {
        return context.stepOneVerticesRestCount < 8
      },
      hasAllVertices: (context, event) => {
        return context.stepOneVerticesRestCount === 8
      },
      hasLessThanThreeVertices: (context, event) => {
        return context.stepOneVerticesCount < 3
      },
      hasThreeVertices: (context, event) => {
        return context.stepOneVerticesCount === 3
      },
      hasNotAllTriangles: (context, event) => {
        return context.stepOneTrianglesRestCount < 12
      },
      hasAllTriangles: (context, event) => {
        return context.stepOneTrianglesRestCount === 12
      }
    },
    delays: {}
  }
)
