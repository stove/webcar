import React,{useState} from 'react';
import TodoList from './TodoList';
import Summary from './Summary';
import TodoForm from './TodoForm';
import './App.css';

const intialState=[
    {
        id: 1,
        description: 'first',
        status: 'pending',
    },
    {
        id: 2,
        description: 'second',
        status: 'completed',
    },
    {
        id: 3,
        description: 'third',
        status: 'pending',
    },
    {
        id: 4,
        description: 'forth',
        status: 'completed',
    },
    {
        id: 5,
        description: 'Fifth',
        status: 'completed',
    }
]
function TodoApp() {

    const [todoItems, setTodoItems] = useState(intialState);

    function addTodoItem(item){
        item.id = todoItems.length + 1;
        setTodoItems(
            [...todoItems, item]
        );
    }
    // function removeTodoItem(item){
    //     let newItems = todoItems.filter( i => i.id !== item.id);
    //     setTodoItems(
    //         newItems
    //     );
    // }
    // function changeItemStatus(item){
    //     item.status === 'pending' ? item.status = 'completed' : item.status = 'pending';
    //     let otherItems = todoItems.filter(i=> i.id !== item.id);
    //     setTodoItems(
    //         [...otherItems, item]
    //     )
    // }
  return (
    <div className="TodoApp">
      <h1> Todo App </h1>
      <TodoForm onAddItem={addTodoItem} />
      <Summary todoItems={todoItems}/>
      <TodoList todoItems={todoItems}/>
    </div>
  );
}

export default TodoApp;
