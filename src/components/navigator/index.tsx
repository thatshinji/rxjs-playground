import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import routes from '@/routes'

import './index.scss'

const Navigator = () => (
  <div>
    <nav>
      {
        routes.map((item, idx: number) => (
          <Link to={item.path} key={idx}>{item.name}</Link>
        ))
      }
    </nav>
    <div className="outlet">
      <Outlet />
    </div>
  </div>
)

export default Navigator