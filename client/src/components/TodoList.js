import React from 'react';
import Task from './Task';
function TodoList(props) {
  
  // props.todoItems
    return (
    <ul className="TodoList">
      {
        props.todoItems.map( (item, index) =>{
          return (<Task todoItem={item}/>);
        })
      }
    </ul>
  );
}

export default TodoList;
