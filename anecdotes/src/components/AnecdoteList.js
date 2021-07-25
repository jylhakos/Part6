import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

// 6.8
const AnecdoteList = () => {

	const anecdotes = useSelector(state => state)

	const dispatch = useDispatch()

	const vote = (id) => {

		console.log('VOTE', id)

		dispatch({
	      type: 'VOTE',
	      payload: id
	    })
	}

	console.log('ANECDOTELIST', anecdotes)

	return (
		<>
      		<h2>Anecdotes</h2>
      		{ anecdotes.map(anecdote =>
        		<div key={anecdote.id}>
          		<div>
            		{anecdote.content}
          		</div>
          		<div>
            		has {anecdote.votes}
            		<button onClick={() => vote(anecdote.id)}>vote</button>
          		</div>
        		</div>
      		)}
      	</>
    )
}

export default AnecdoteList