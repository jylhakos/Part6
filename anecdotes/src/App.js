import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { create } from './reducers/anecdoteReducer'

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

  function getInput(event) {

    event.preventDefault()

    const anecdote = event.target.anecdote.value

    console.log('ANECDOTE', anecdote)

    dispatch(create(anecdote))
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
      <form onSubmit={getInput}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App