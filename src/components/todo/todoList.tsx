import { useState } from 'react';
        
const todo = () => {
    const[todos,setTodos] = useState<ITodo[]>([])
    const[inputValue,setInputValue]= useState("")
    function addTodo() {
        if(inputValue.trim()){
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                completed: false
            }
            setTodos([...todos,newTodo])
            setInputValue("")
        }
        
    }
    function removeTodo(id:number) {
        setTodos(todos.filter(todo=>todo.id !== id))
    }
    function toggleTodo(id:number) {
        setTodos(todos.map(todo=>todo.id === id?{...todo, completed : !todo.completed}:todo
            
        ))
    }
    return (
        <>
        <h2>To-do List</h2>
        <input type="" value={inputValue}  onChange={(e) =>setInputValue(e.target.value)} placeholder='Add a new Todo'/>
        <button onClick={addTodo}>Add Todo</button>
        <ul>
            {todos.map(todo=>
                <li key={todo.id}>{todo.text}
                <button onClick={() => toggleTodo(todo.id)} style={{backgroundColor:"white", color:"black", textDecoration:todo.completed?"line-through":'none', margin:'5px'}}>Toggle</button>
                <button onClick={() =>removeTodo(todo.id)} style={{backgroundColor:"red"}}>Remove</button>
                </li>
                
            )}
        </ul>
        </>
    );
};
export default todo;