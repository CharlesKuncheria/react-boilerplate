import React, { Component } from 'react'
import say, {sayBoth} from '../constants/hello.js'
import {increment} from '../actions'
import CountWidget from '../containers/CountWidget.jsx'


let App = (props) => (
  <div>
    <CountWidget store={props.store} />
    <p>{say}</p>
    <p>{sayBoth('Hello', 'World')}</p>
  </div>
)

export default App;