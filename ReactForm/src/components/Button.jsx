import React from 'react'

function Button({type, value, id, onClick}) {
  return (
    <input type={type} value={value} id={id}
          onClick={onClick}/>
  )
}

export default Button