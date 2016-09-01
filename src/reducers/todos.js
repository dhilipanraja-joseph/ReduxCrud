
export default function todos(state = [] , action){
  switch(action.type){
    case "CREATE_TODO":
      return state.concat(action.payload.todo);
      break;

    case "DELETE_TODO":
      return state.filter((todo,i)=>{
        if (action.payload.index !== i){
          return true;
        }else{
          return false;
        }
      });
      break;

    case "UPDATE_TODO":
      return state.map((todo,index)=>{
        if (index === action.payload.index){
          return action.payload.todo;
        }else{
          return todo;
        }
      });
      break;

    default:
      return state;
  }
}
