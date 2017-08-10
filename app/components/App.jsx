import React, { Component } from 'react'
import say, {sayBoth} from '../constants/hello.js'
import {increment} from '../actions'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: this.props.store.getState()
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.props.store.subscribe(this.handleChange);
  }

  handleChange(){
    this.setState({
      count: this.props.store.getState()
    })
  }

  handleClick() {
    var action = increment();
    this.props.store.dispatch(action);
  }

  render(){
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        <p>{this.state.count}</p>
        <p>{say}</p>
        <p>{sayBoth('Hello', 'World')}</p>
      </div>
    )
  }
}