import Notification from './../components/Notification'

const initialState = ['HIDE']

export const show = (message) => {
  return {
    type: 'MESSAGE',
    payload: message
  }
}

const notificationReducer = (state = initialState, action) => {

  switch (action.type) {

    case 'MESSAGE':
      console.log('MESSAGE',action.payload)
      return [...state,
        action.payload
      ]
    default:
      console.log('DEFAULT',action.payload)
      return state
  }
}

export default notificationReducer