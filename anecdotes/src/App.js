import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import AnecdoteForm from './components/AnecdoteForm'

const App = () => {

  const anecdotes = useSelector(state => state)

  const dispatch = useDispatch()

  const vote = (id) => {

    console.log('VOTE', id)

    dispatch({
      type: 'VOTE',
      payload: id
    })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {
        Object.keys(anecdotes).map((anecdote, index) =>

        <div key={anecdote.id}>
          <div>
            {anecdotes[index].content}
          </div>
          <div>
            has {anecdotes[index].votes}
            <button onClick={() => vote(anecdotes[index].id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App