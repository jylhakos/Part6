import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import Notification from './../components/Notification'

// 6.17
import { update } from './../reducers/anecdoteReducer'

// import { show, hide } from './../reducers/notificationReducer'

// 6.8
const AnecdoteList = () => {

	const anecdotes = useSelector(state => state.anecdotes)

	const messages = useSelector(state => state.notification)

	const dispatch = useDispatch()

	const vote = (anecdote) => {

		console.log('VOTE', anecdote)

		// TODO: REDUCER TO UPDATE VOTES
    	// 6.8
		dispatch({
	      type: 'VOTE',
	      payload: anecdote.id
	    })

	    // 6.17
    	dispatch(update('VOTE', anecdote))

		//dispatch(show('you voted ' + anecdote.content))

		/*setTimeout(() => {
			dispatch(show('HIDE'))
    	}, 5000)*/
	}

	console.log('ANECDOTELIST', anecdotes)

	return (
		<>
      		<h2>Anecdotes</h2>
      		<Notification message={messages}/>
      		{ 
      			anecdotes.map(anecdote =>
        		<div key={anecdote.id}>
          		<div>
            		{anecdote.content}
          		</div>
          		<div>
            		has {anecdote.votes}
            		<button onClick={() => vote(anecdote)}>vote</button>
          		</div>
        		</div>
      		)}
      	</>
    )
}

export default AnecdoteList