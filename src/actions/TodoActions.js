// const TodoActions={
//
// }

export function createTodo(todo){
  return {
    type: 'CREATE_TODO',
    payload : {todo}
  }
}

export function deleteTodo(index){
  return {
    type: 'DELETE_TODO',
    payload : {index}
  }
}

export function updateTodo(todo,index){
  return {
    type: 'UPDATE_TODO',
    payload : {todo,index}
  }
}
