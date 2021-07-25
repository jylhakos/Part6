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

  // 6.4
  function getInput(event) {

    event.preventDefault()

    const anecdote = event.target.anecdote.value

    console.log('ANECDOTE', anecdote)

    // 6.6
    dispatch(create(anecdote))

    document.getElementById("create-form").reset();
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
      <form id="create-form" onSubmit={getInput}>
        <div><input name="anecdote" style = {{ width: "25%" }}/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App