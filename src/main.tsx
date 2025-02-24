import './styles/index.css'

import { ClickToComponent } from 'click-to-react-component'
import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'

import { router } from './router'

const $container = document.querySelector('#root') as HTMLElement

createRoot($container).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ClickToComponent />
  </React.StrictMode>,
)
