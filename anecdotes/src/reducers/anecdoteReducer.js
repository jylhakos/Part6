const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const create = (anecdote) => {
  return {
    type: 'CREATE',
    payload: {
      content: anecdote,
      id: getId(),
      votes: 0
    }
  }
}

const initialState = anecdotesAtStart.map(asObject)

console.log('INITIAL STATE: ', typeof initialState, initialState )

const reducer = (state = initialState, action) => {

  console.log('1. state: ', state, ' action', action)

  switch (action.type) {
    // 6.3
    case 'VOTE':
      console.log('VOTE:', action.type, ' action.payload', action.payload)
      return state.map(anecdote => {
        if (anecdote.id !== action.payload) {
          return anecdote
        }
        return {
          ...anecdote,
          votes: anecdote.votes+1
        }
      })
    // 6.4
    case 'CREATE':
      console.log('CREATE:', action.payload.content)
      return state.concat(action.payload)
    default:
      console.log('0. state', state)
      return state
  }
}

export default reducer