import React , { Component} from 'react'

export default class TodoForm extends Component {
  constructor(){
    super();
    this.state={
      todo: ''
    }
    this._onInputChange=this._onInputChange.bind(this);
    this._onSubmit=this._onSubmit.bind(this);

  }
  _onInputChange(e){
    this.setState({ todo : e.target.value})
  }
  _onSubmit(e){
    e.preventDefault();
    let { todo } = this.state;
    //console.log(todo);
    this.setState({ todo : ''})
    this.props.createTodo(todo);
  }
  render(){
    return (
      <form onSubmit={this._onSubmit}>
        <input value={this.state.todo} onChange={this._onInputChange} type="text"/>
        <button>Add</button>
      </form>
    )
  }
}
