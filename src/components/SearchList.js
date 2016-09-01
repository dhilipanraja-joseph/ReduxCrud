import React , {Component} from 'react'

export default class SearchList extends Component{
  constructor(){
    super();
    this.state={
      //filter : '',
      filterList : []
    }
    this._filterList=this._filterList.bind(this);
  }
  _filterList(e){
    e.preventDefault();
    let regex = new RegExp(e.target.value,'i');
    let filter = this.props.todos.filter(todo=>{
                    return (todo.search(regex) > -1);
                 });
    this.setState({ filterList : filter });
    //console.log(e.target.value);
  }
  render(){
    let fList = this.state.filterList.map((list,i)=>{
      return (
        <li key={i}>{list}</li>
      )
    });
    return (
      <div>
        <form>
          <input type="text" onChange={this._filterList} placeholder="Filter List"/>
        </form>
        <ul>
          {fList}
        </ul>
      </div>
    )
  }
}
