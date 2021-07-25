import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'

// 6.9
//import reducer from './reducers/anecdoteReducer'

import store from './components/store';

//const anecdotesReducer = combineReducers({
//    anecdotes: reducer,
//});

// 6.9
//const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)