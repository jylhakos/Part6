import React, {useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux'

import AnecdoteList from './components/AnecdoteList'

import AnecdoteForm from './components/AnecdoteForm'

// 6.15
// $ npm run server
// $ npm start

// 6.13
// import anecdotesService from './../services/anecdotes'

// 6.15
import {initializeAnecdotes} from './reducers/anecdoteReducer'

const App = () => {

  const dispatch = useDispatch()

  // 6.13
  /*useEffect(() => {
    anecdotesService.getAll().then(anecdotes => {
        store.dispatch(initializeAnecdotes(anecdotes))
    }
  }, [])*/

  // 6.15
  useEffect(() => {
    dispatch(initializeAnecdotes()) 
  },[dispatch]) 

  return (
    <div>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App