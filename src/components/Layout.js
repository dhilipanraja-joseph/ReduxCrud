import React, { Component } from 'react';

import TodoApp from './TodoApp'

export default class Layout extends Component {
  render() {
    return (
      <div className="container">
      {/* <h1>React using Redux</h1> */}
      <TodoApp/>
      </div>
    )
  }
}
