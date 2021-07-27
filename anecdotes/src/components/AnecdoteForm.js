import React from 'react'

import { useDispatch } from 'react-redux'

import { create } from './../reducers/anecdoteReducer'

import { show, hide } from './../reducers/notificationReducer'

import anecdotesService from './../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

// 6.7
const AnecdoteForm = (props) => {

  const dispatch = useDispatch()

  // 6.4
  //function getInput(event) {
  // 6.14
  const getInput = async (event) => {

    event.preventDefault()

    const anecdote = event.target.anecdote.value

    // 6.14
    const object = { 
      content: anecdote,
      id: getId(),
      votes: 0
    }

    console.log('ANECDOTE', object.content)

    // 6.14, 6.16
    //const newAnecdote = await anecdotesService.createNew(object)

    // 6.6, 6.16
    dispatch(create(object))

    document.getElementById("create-form").reset()

    // 6.11
    dispatch(show('you created ' + object.content))

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