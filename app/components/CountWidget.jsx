import React from 'react'

var CountWidget = (props) => (
    <div>
        <button onClick={props.handleClick}>Increment</button>
        <p>{props.count}</p>
      </div>
)

export default CountWidget