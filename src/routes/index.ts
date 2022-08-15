import  React, { lazy, LazyExoticComponent }  from 'react'

export type RouteTypes = {
  name: string
  path: string
  Componet: LazyExoticComponent<any>
}

const routes: RouteTypes[] = [
  {
    name: 'todo-list',
    path: 'todo-list',
    Componet: lazy(() => import('@/pages/todo-list'))
  },
]

export default routes