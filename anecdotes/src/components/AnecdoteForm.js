import React from 'react'

import { useDispatch } from 'react-redux'

import { create } from './../reducers/anecdoteReducer'

import { show, hide } from './../reducers/notificationReducer'

// 6.7
const AnecdoteForm = (props) => {

  const dispatch = useDispatch()

  // 6.4
  function getInput(event) {

    event.preventDefault()

    const anecdote = event.target.anecdote.value

    console.log('ANECDOTE', anecdote)

    // 6.6
    dispatch(create(anecdote))

    document.getElementById("create-form").reset()

    // 6.11
    dispatch(show('you created ' + anecdote))

    setTimeout(() => {
      dispatch(show('HIDE'))
      }, 5000)
  }

  return (
    <>
    <h2>Create New</h2>
      <form id="create-form" onSubmit={getInput}>
        <div><input name="anecdote" style = {{ width: "25%" }}/></div>
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default AnecdoteForm