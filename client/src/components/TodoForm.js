import React, {useState} from 'react';

function TodoForm(props) {
    const [description, setDescription] = useState("");
  
    function onInputChange(event){
        setDescription(event.target.value)
    }
    function handleSubmit(event){
        let todoItem = {
            description: description,
            status: 'completed'
        };
        console.log("Todo Item : ",todoItem);
        props.onAddItem(todoItem);
        setDescription('');
        event.preventDefault();
    }

    return (
    <form onSubmit={handleSubmit}>
          <label> Description : </label>
          <input type="text" value={description} onChange={onInputChange} />
          <input type="submit" value="Submit" />
    </form>
  );
}

export default TodoForm;
