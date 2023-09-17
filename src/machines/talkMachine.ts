import { createMachine, assign } from 'xstate'

export const talkMachine = createMachine(
  {
    context: {
      stepOneVerticesCount: 0,
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
              '1000': [
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
              '100': [
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
            on: {
              addRestVertices: {
                target: 'hasThreeVertices',
                actions: {
                  type: 'addRestVertex',
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
    },
    predictableActionArguments: true,
    preserveActionOrder: true
  },
  {
    actions: {
      addVertex: assign(context => {
        const newVerticesCount = context.stepOneVerticesCount + 1
        console.log('adding vertices')
        return {
          ...context,
          stepOneVerticesCount: newVerticesCount
        }
      }),
      addRestVertex: assign(context => {
        const newVerticesCount = context.stepOneVerticesRestCount + 1
        console.log('adding rest vertices')
        return {
          ...context,
          stepOneVerticesRestCount: newVerticesCount
        }
      })
    },
    services: {},
    guards: {
      hasNotAllVertices: (context, event) => {
        return context.stepOneVerticesRestCount < 12
      },
      hasAllVertices: (context, event) => {
        return context.stepOneVerticesRestCount === 12
      },
      hasLessThanThreeVertices: (context, event) => {
        return context.stepOneVerticesCount < 3
      },
      hasThreeVertices: (context, event) => {
        return context.stepOneVerticesCount === 3
      }
    },
    delays: {}
  }
)
