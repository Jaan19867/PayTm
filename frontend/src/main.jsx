import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './components/Layout.jsx'
import Signin from './components/Signin.jsx'
import Signup from './components/Signup.jsx'
import Dashboard from './components/Dashboard.jsx'
import SendMoney from './components/SendMoney.jsx'


import { createBrowserRouter, RouterProvider,
Route, createRoutesFromElements,

} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<Signin />} />
      <Route path="Dashboard" element={<Dashboard />} >
            <Route path='sendmoney' element={<SendMoney/>}/>
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
