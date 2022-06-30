import React, { useState } from 'react'

const Input = (props) => {

    

  return (
    <div>
        <input type='text' placeholder="Enter your name?" onChange={(e) => props.setName(e.target.value)}></input>
        {props.name && <h3>{`Welcome, ${props.name}!`}</h3>}
    </div>
  )
}

export default Input