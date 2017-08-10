import React, { Component } from 'react'
import say, {sayBoth} from '../constants/hello.js'

export default class App extends Component {
  render(){
    return (
      <div>
        <p>{say}</p>
        <p>{sayBoth('Hello', 'World')}</p>
      </div>
    )
  }
}