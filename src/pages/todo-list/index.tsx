import React, { useEffect, useState } from 'react'
import todoStore, { Todo } from './store'
import useObservable from './utils'
import { BehaviorSubject, map, from } from 'rxjs'

import './index.scss'

const source = [
  {
    name: 'learning rxjs',
    done: false,
  },
  {
    name: 'make new friends',
    done: false
  },
  {
    name: 'cooking foods',
    done: false
  } 
]

const TodoList = () => {
  const [value, setValue] = useState('')
  const todoItems = useObservable(todoStore.todos, todoStore._todos)

  useEffect(() => {
    todoStore.init(source)
  }, [])

  const addItem = () => {
    todoStore.add(value) 
    setValue('')
  }
  return (
    <div>
      <p>click to finished</p>
      <ul>
        {
          todoItems.map((item: Todo, idx) => {
            return (<li className={!item.done ? 'li active' : 'li inactive'} onClick={() => todoStore.done(item)} key={idx}>{item.name}</li> )
          })
        }
      </ul>
      <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <span onClick={addItem}>add</span>
      </div>
    </div>
  )
}

export default TodoList