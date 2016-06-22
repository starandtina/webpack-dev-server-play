import React from 'react'
import ReactDOM from 'react-dom'

function Person({ firstName, lastName }) {
  return (
    <span>{lastName}, {firstName}</span>
  )
}

ReactDOM.render(<Person firstName='Khalil' lastName='Zhang' />, document.body)
