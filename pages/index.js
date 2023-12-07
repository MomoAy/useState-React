import { Component } from 'react'
import FuncState from './FuncState'
import Todo from './component/Todo'

export default function Home() {
    return (
      <div className='flex justify-center'>
        <Todo/>
      </div>
    )
  }

