// 6.9
import { createStore, combineReducers } from 'redux';

// $ npm install --save-dev redux-devtools-extension

import { composeWithDevTools } from 'redux-devtools-extension'

import anecdoteReducer from './../reducers/anecdoteReducer'

import notificationReducer from './../reducers/notificationReducer'

// 6.13
import anecdotesService from './../services/anecdotes'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer
})

//const dispatch = useDispatch()

const store = createStore(reducer, composeWithDevTools())

// 6.13
anecdotesService.getAll().then(anecdotes =>
    anecdotes.forEach(anecdote => {
        store.dispatch({ type: 'CREATE',
            payload: {
                content: anecdote.content,
                id: anecdote.id,
                votes: anecdote.votes 
            }
        })
  }))

console.log(store.getState())

export default store;
