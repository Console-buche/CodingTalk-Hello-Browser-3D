import { createMachine, assign } from 'xstate'

export const talkMachine = createMachine(
  {
    context: {
      stepOneVerticesCount: 0
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
                target: 'oneVertexVisible'
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
          hasThreeVertices: {}
        }
      }
    },
    schema: {
      events: {} as { type: 'start' } | { type: 'showOneVertex' } | { type: 'addVertices' }
    },
    predictableActionArguments: true,
    preserveActionOrder: true
  },
  {
    actions: {
      addVertex: assign((context, event) => {
        const newVerticesCount = context.stepOneVerticesCount + 1
        console.log('adding vertices')
        return {
          stepOneVerticesCount: newVerticesCount
        }
      })
    },
    services: {},
    guards: {
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
