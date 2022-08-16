import { BehaviorSubject } from "rxjs"

export type Todo = {
  name: string
  done: boolean
}

const todoStore = {
  _todos: [] as unknown as Todo[],
  todos: new BehaviorSubject<Todo[]>([]),

  // initial value
  init(todoItems: Todo[]) {
    todoStore._todos = [...todoStore._todos, ...todoItems]
    todoStore.todos.next(todoItems)
  },

  add(name: string) {
    todoStore._todos = [...todoStore._todos, {name, done: false}]
    todoStore.todos.next(todoStore._todos)
  },

  done(todo: Todo) {
    todoStore._todos = todoStore._todos.map(t => {
      if (t.name === todo.name) {
        return { ...todo, done: !t.done}
      }
      return t
    })
    todoStore.todos.next(todoStore._todos)
  }
}

export default todoStore