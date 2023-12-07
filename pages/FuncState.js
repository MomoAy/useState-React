import React, { useState } from 'react'

const  FuncState = () => {
    const [count, setCount] = useState(0)

    const addOne = () =>{
        setCount(count+1)
    }

    return (
      <div>
        <h1>FuncState : {count}</h1>
        <button onClick={addOne}>Incrementer de 1</button>
      </div>

    )
  }

export default FuncState