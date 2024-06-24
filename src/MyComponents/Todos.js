import React from 'react'
import {TodoItem} from './TodoItem';

export const Todos = (props) => {
    let containerstyle = {
        minHeight:"80vh"
    }
  return (
    <div className="container" style={containerstyle}>
      <h3 className='my-3'> Todos List</h3>
      {props.todos.length === 0? "No item in list" :
       props.todos.map((todo)=>{
            return <TodoItem todo = {todo} key = {todo.sno } onDelete = {props.onDelete}/>
      })
    }
      
    </div>
  )
}

export default Todos
// <TodoItem todo = {props.todos[0]}/>
/* 
return multiple tags you can do

 return (
            <>
            <h3>This is extra</h3>
            <TodoItem todo = {todo}/>
            </>)
            
*/
