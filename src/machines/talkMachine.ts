import { Color, Euler, Vector2, Vector3 } from 'three'
import { createMachine, assign } from 'xstate'

export const talkMachine = createMachine(
  {
    context: {
      currentStep: 0,
      camDolly: 0,
      showStepTitle: true,
      codeSample: '',
      color: new Color('black'),
      camPosition: new Vector3(0, 0, 0),
      rotationView: new Euler().setFromVector3(new Vector3(0, 0, 0.001)),
      camTruck: new Vector2(0, 0),
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
              const camTruck = new Vector2(-2.5, 0)
              return { ...context, showStepTitle: false, camTruck, codeSample: 'This is not a triangle.' }
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
            entry: assign(context => {
              const codeSample = `const vertex = new Vector3(x, y, z)`
              return { ...context, codeSample }
            }),
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
            entry: assign(context => {
              return { ...context }
            }),
            exit: assign(context => {
              const camTruck = new Vector2(0.5, 0.5)
              const rotationView = new Euler().setFromVector3(new Vector3(-0.003, 0, 0.003))
              return { ...context, camTruck, rotationView }
            }),
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
              '300': [
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
              '100': [
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
              },
              moveToStepTwo: {
                target: '#talk.stepTwo'
              }
            }
          }
        }
      },
      stepTwo: {
        initial: 'helloWorld',
        states: {
          helloWorld: {
            entry: assign(context => {
              const camTruck = new Vector2(22.5, 0)
              const color = new Color('#D5B0E3')
              const currentStep = 0.5
              return {
                ...context,
                color,
                showStepTitle: true,
                currentStep,
                camTruck,
                codeSample: ''
              }
            }),
            exit: assign(context => {
              const camDolly = -1
              const camTruck = new Vector2(0, 1)
              return {
                ...context,
                camDolly,
                camTruck,
                showStepTitle: false
              }
            }),
            on: {
              showWallOfBoxes: {
                target: 'wallOfBoxesVisible',
                actions: {
                  type: 'showWallOfBoxes',
                  params: {}
                }
              }
            }
          },
          wallOfBoxesVisible: {
            entry: assign(context => {
              const currentStep = 1
              const codeSample = `ToDo why black code`
              return { ...context, currentStep, codeSample }
            }),
            on: {
              lightUpWallOfBoxes: {
                target: 'litUpWallOfBoxes'
              }
            }
          },
          litUpWallOfBoxes: {
            entry: assign(context => {
              const codeSample = `ToDo lit up code`
              const currentStep = 2
              return { ...context, currentStep, codeSample }
            }),
            on: {
              texturesVisible: {
                target: 'texturesVisible'
              }
            }
          },
          texturesVisible: {
            entry: assign(context => {
              const codeSample = `TODO textures visible`
              const currentStep = 2.5
              return { ...context, currentStep, codeSample }
            }),
            on: {
              unpausedGravity: {
                target: 'unpausedGravity'
              }
            }
          },
          unpausedGravity: {
            entry: assign(context => {
              const codeSample = `TODO unpauseGravity`
              const currentStep = 3
              return { ...context, currentStep, codeSample }
            }),
            on: {
              fadeToBlack: {
                target: 'fadeToBlack'
              }
            }
          },
          fadeToBlack: {
            entry: assign(context => {
              const codeSample = `TODO fadeToBlack`
              const currentStep = 4
              const color = new Color('black')
              return { ...context, currentStep, color, codeSample }
            })
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
        | { type: 'moveToStepTwo' }
        | { type: 'showWallOfBoxes' }
        | { type: 'lightUpWallOfBoxes' }
        | { type: 'texturesVisible' }
        | { type: 'unpausedGravity' }
        | { type: 'fadeToBlack' }
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
