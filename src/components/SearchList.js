import React , {Component} from 'react'
import TextField from 'material-ui/TextField';

const listyle = {
  fontSize : 24,
};
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
        <li style={listyle} key={i}>{list}</li>
      )
    });
    return (
      <div>
        <form>
        <TextField
          hintText="FILTER LIST"
          fullWidth={true}
          onChange={this._filterList}
        />
        {/* <input type="text"  placeholder="Filter List"/> */}
        </form>
        <ul>
          {fList}
        </ul>
      </div>
    )
  }
}
