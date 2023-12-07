import { useState } from 'react'
import AddTodo from "./addTodo"
import { v4 as uuidv4 } from 'uuid';

function Todo() {
    const [todos, setTodo] = useState([{ id: 1, todo: "Achetez du lait" },
    { id: 2, todo: "Achetez du pain" },
    { id: 3, todo: "Achetez du fromage" }])

    const [warning, setWarning] =  useState(false)
    const addNewTodo = (newTodo) =>{
        setTodo([
            ...todos,
            {id:uuidv4, todo:newTodo}
        ])
    }
    return (
        <div className='w-4/5'>
            <h1 className='text-center'>{todos.length} To-Do</h1>
            <ul>
                {todos.map(todo => {
                    return <li key={todo.id} className='border p-5 hover:bg-zinc-700'>{todo.todo}</li>
                })}
            </ul>
            <AddTodo addNewTodo={addNewTodo}/>
        </div>
    )
}

export default Todo