import React, {useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux'

import AnecdoteList from './components/AnecdoteList'

import AnecdoteForm from './components/AnecdoteForm'

// 6.13
// import anecdotesService from './../services/anecdotes'
// import anecdoteReducer from './../reducers/anecdoteReducer'

const App = () => {

  // 6.13
  /*useEffect(() => {
    anecdotesService.getAll().then(anecdotes => {
        store.dispatch(initializeAnecdotes(anecdotes))
    }
  }, [])*/

  return (
    <div>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App