import { useEffect, useState } from "react"
import { BehaviorSubject } from "rxjs"
import todoStore, { Todo } from "./store"

const useObservable = (observable: BehaviorSubject<Todo[]>, initialState: Todo[]) => {
  const [value, setValue] = useState(initialState)
  useEffect(() => {
    const subscription$ = observable.subscribe(val => {
      setValue(val)
    })
    return () => {
      todoStore.todos.next([])
      todoStore._todos = []
      subscription$.unsubscribe()
    } 
  }, [])
  return value
}

export default useObservable