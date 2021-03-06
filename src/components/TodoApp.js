import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createTodo , updateTodo , deleteTodo} from '../actions/TodoActions'
// import { deleteTodo } from '../actions/TodoActions'
// import { updateTodo } from '../actions/TodoActions'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import SearchList from './SearchList'


class TodoApp extends Component{
  render(){
    //console.log('this.props',this.props);
    let { todos , deleteTodo , createTodo , updateTodo } = this.props;
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm createTodo={createTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        <SearchList todos={todos}/>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    todos : state.todos
  }
}

function mapDispatchToProps(dispatch){
  return {
    createTodo(todo){
      dispatch(createTodo(todo));
    },
    deleteTodo(index){
      dispatch(deleteTodo(index));
    },
    updateTodo(todo,index){
      dispatch(updateTodo(todo,index));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
