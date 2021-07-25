import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import Notification from './../components/Notification'

import { show, hide } from './../reducers/notificationReducer'

// 6.8
const AnecdoteList = () => {

	const anecdotes = useSelector(state => state.anecdotes)

	const messages = useSelector(state => state.notification)

	const dispatch = useDispatch()

	const vote = (id, content) => {

		console.log('VOTE', id)

		dispatch({
	      type: 'VOTE',
	      payload: id
	    })

		dispatch(show('you voted ' + content))

		setTimeout(() => {
			dispatch(show('HIDE'))
    	}, 5000)
	}

	console.log('ANECDOTELIST', anecdotes)

	return (
		<>
      		<h2>Anecdotes</h2>
      		<Notification message={messages}/>
      		{ anecdotes.map(anecdote =>
        		<div key={anecdote.id}>
          		<div>
            		{anecdote.content}
          		</div>
          		<div>
            		has {anecdote.votes}
            		<button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          		</div>
        		</div>
      		)}
      	</>
    )
}

export default AnecdoteList