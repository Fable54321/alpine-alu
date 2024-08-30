import React from 'react'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import RootLayout from '../RootLayout/RootLayout'
import Home from '../Home/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element ={<RootLayout />}>
      <Route path ='/home' element={<Home/>}/>

    </Route>
  ))

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
