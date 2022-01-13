# Redux

Redux uses single place to contain the global state in your application, and specific patterns to follow when updating that state. 

State describes the condition of the app at a specific point in time.

An action is an event that describes something that happened in the application.

When something happened (for example clicking a button), the state is updated based on what occurred.

**Flux**

Flux offers a standard way for how and where the application's state is kept and how it is modified.

In Flux, the state is separated completely from the React-components into its own stores. 

State in the store is not changed directly, but with different actions.

The state of your application is stored in an object tree within a single store.

When an action changes the state of the store, then the views are rerendered.

The change is done with an action if some action on the application, for example clicking a link, yields the need to change the state. 

A reducer is a function that receives the current state and an action object, then decides how to update the state if necessary, and returns the new state.

**Redux**

Redux is a library for managing and updating application state, using events called actions.

The whole state of the application is stored into one JavaScript object in the store.

```

$ npm install redux react-redux

```

Redux app has one root reducer function that you will pass to createStore. 

That one root reducer function is responsible for handling all of the actions that are dispatched.

The store uses the reducer to handle actions, which are dispatched to the store with its dispatch method.

The important method the store has is subscribe, which is used to create callback functions the store calls when its state is changed.

React Redux includes Provider component, which makes the Redux store available to the rest of your app.

```

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux' 
import App from './App'

import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})

const store = createStore(reducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

```

React apps have an App component at the very top level.

We create an App component that renders NewNote and Notes.

```

import React, { useEffect } from 'react'
import Notes from './components/Notes'
import NewNote from './components/NewNote'
import VisibilityFilter from './components/VisibilityFilter'

import noteService from './services/notes'
import { initializeNotes } from './reducers/noteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    noteService
      .getAll().then(notes => dispatch(initializeNotes(notes)))
  }, [dispatch])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App

```

Actions are objects which have at least a field determining the type of the action. 

The impact of the action to the state of the application is defined using a reducer. 

The reducer returns a new state based on the actions type.

```

const noteReducer = (state = [], action) => {
  switch(action.type) {
    case 'NEW_NOTE':
      return [...state, action.data]
    case 'TOGGLE_IMPORTANCE':
      const id = action.data.id
      const noteToChange = state.find(n => n.id === id)
      const changedNote = { 
        ...noteToChange, 
        important: !noteToChange.important 
      }
      return state.map(note =>
        note.id !== id ? note : changedNote 
      )
    case 'INIT_NOTES':
      return action.data
    default:
      return state
  }
}

export const createNote = (data) => {
  return {
    type: 'NEW_NOTE',
    data,
  }
}

export const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id }
  }
}

export const initializeNotes = (notes) => {
  return {
    type: 'INIT_NOTES',
    data: notes,
  }
}

export default noteReducer

```
Notes is a container component, as it contains some application logic.

React Redux provides custom React hooks that allow your React components to interact with the Redux store.

```

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from '../reducers/noteReducer'

const Note = ({ note, handleClick }) => {
  return(
    <li onClick={handleClick}>
      {note.content} 
      <strong> {note.important ? 'important' : ''}</strong>
    </li>
  )
}

const Notes = () => {
  const dispatch = useDispatch()
  const notes = useSelector(({ filter, notes }) => {
    if ( filter === 'ALL' ) {
      return notes
    }
    return filter  === 'IMPORTANT' 
      ? notes.filter(note => note.important)
      : notes.filter(note => !note.important)
  })

  return(
    <ul>
      {notes.map(note =>
        <Note
          key={note.id}
          note={note}
          handleClick={() => 
            dispatch(toggleImportanceOf(note.id))
          }
        />
      )}
    </ul>
  )
}

export default Notes

```
Import the Hook useDispath from react-redux library.

The useDispatch hook returns a reference to the dispatch function from the Redux store.

The component can access the notes stored in the store with the useSelector hook of the react redux library.

```
import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../reducers/noteReducer'
import noteService from '../services/notes'

const NewNote = () => {
  const dispatch = useDispatch()

  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    const newNote = await noteService.createNew(content)
    dispatch(createNote(newNote))
  }

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  )
}

export default NewNote

```
**Communicating with server in a redux application**

```

$ npm install axios

```
Axios does HTTP requests from the browser to the API on the server.

```

import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { getAll }

```

A link to Redux.

https://redux.js.org/tutorials/essentials/part-1-overview-concepts

![alt text](https://github.com/jylhakos/Part6/tree/main/Part6.png?raw=true)

