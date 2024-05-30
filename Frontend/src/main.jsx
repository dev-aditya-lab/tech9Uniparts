import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


import { Layout } from './Layout.jsx'
import { Login } from './components/Login/Login.jsx'
import { Signup } from './components/SignUp/Signup.jsx'
import Capex from './components/NutanixSolution/Capex.jsx'
import Opex from './components/NutanixSolution/Opex.jsx'
import DsOpex from './components/DiscreteSolution/Opex.jsx'
import DsCapex from './components/DiscreteSolution/Capex.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='NsCapex' element={<Capex />} />
      <Route path='NsOpex' element={<Opex />} />
      <Route path='DsOpex' element={<DsOpex />} />
      <Route path='DsCapex' element={<DsCapex />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
