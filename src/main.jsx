import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import StoreManageCards from './component/storeManager/StoreManage.jsx'
import Home from './component/Home.jsx'
import LogIn from './component/login/LogIn.jsx'
import Stores from './component/storeManager/store card/Stores.jsx'
import StoreManage from './component/storeManager/StoreManage.jsx'

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}>
        <Route path='LogIn' element = {<LogIn/>}/>
      </Route>
      <Route path='storeMangement' element = {<StoreManage/>}/>
      <Route path='storeMangement/user/:storeName' element = {<Stores/>}/>  
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(

 <React.StrictMode>
   <RouterProvider router={router} />
 </React.StrictMode>

)
