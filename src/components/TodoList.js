import React , { Component} from 'react'

export default class TodoList extends Component {
  constructor(){
    super();
    this._delete=this._delete.bind(this);
    this._update=this._update.bind(this);
  }
  _delete(i){
    //console.log(this.props);
    this.props.deleteTodo(i);
  }
  _update(i){
    //console.log(i);
    let todo = prompt("To Change TODO");
    this.props.updateTodo(todo,i);
  }
  render(){
    //console.log(this.props);
    let { todos } = this.props;
    let Todos = todos.map((todo,i)=>{
      return (
        <li key={i} onDoubleClick={this._delete.bind(null,i)}>{todo}<span onClick={this._update.bind(null,i)}> - </span></li>
      )
    });
    return (
      <ol>
        {Todos}
      </ol>
    )
  }
}
