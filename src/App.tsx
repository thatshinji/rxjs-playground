import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigator from '@/components/navigator'
import Home from './pages/home'
import routes from './routes'

import './index.scss'


const App = () => {
  return (
    <Suspense fallback={'loading'}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigator />}>
            <Route path='' element={<Home />} />
            {
              routes.map(({path, Componet}, idx) => (
                <Route path={path} element={<Componet />} key={idx}/>
              ))
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
