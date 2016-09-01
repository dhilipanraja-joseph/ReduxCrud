import React , { Component} from 'react'
import FontIcon from 'material-ui/FontIcon'
import {red500, yellow500, blue500} from 'material-ui/styles/colors'

const iconStyles = {
  marginRight: 10,
  fontSize : 15,
};

const listyle = {
  fontSize : 24,
};

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
    if(todo !== ''){
      this.props.updateTodo(todo,i);
    }
  }
  render(){
    //console.log(this.props);
    let { todos } = this.props;
    let Todos = todos.map((todo,i)=>{
      return (
        <li  style={listyle} key={i} onDoubleClick={this._delete.bind(null,i)}>
          {todo} <FontIcon
            onClick={this._update.bind(null,i)}
            className="material-icons"
            style={iconStyles}>edit</FontIcon>
        </li>
      )
    });
    return (
      <ol>
        {Todos}
      </ol>
    )
  }
}
