'use client'

import { useState } from 'react'

function AddTodo(props) {

    const [addTodo, setAddTodo] = useState('')


    const funcAddTodo = (e) => {
        setAddTodo(e.target.value)
    }
    const handerTodo = (e) => {
        e.preventDefault()
        if (addTodo != '') {
            props.addNewTodo(addTodo)
            setAddTodo('')
        }
    }

    return (
        <form onSubmit={handerTodo}>
            <div className="flex flex-col gap-2 border mt-2 p-2 ">
                <label>Ajouter une tache</label>
                <input type="text" value={addTodo} className="text-black" onChange={funcAddTodo} required/>
                <input type="submit" className='bg-green-500 w-28 rounded-sm' />
            </div>
        </form>
    )
}

export default AddTodo