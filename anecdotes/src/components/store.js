// 6.9
import { createStore } from 'redux';
import reducer from './../reducers/anecdoteReducer'
// $ npm install --save-dev redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools())

export default store;
