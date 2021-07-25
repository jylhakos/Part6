
import React from 'react'

// 6.10
//import { useSelector, useDispatch } from 'react-redux'

const Notification = ({message}) => {

  console.log('NOTIFICATION', message[message.length-1])

  const style_show = {
    color: 'green',
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const style_hide = {
    display: 'none',
  }

  if (message[message.length-1] === 'HIDE') {
    return (
    <div style={style_hide}>
    </div>)
  } else {
    return (
      <div style={style_show}>
        {message[message.length-1]}
      </div>)
  }
}

export default Notification
