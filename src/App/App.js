import React from 'react'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import RootLayout from '../RootLayout/RootLayout'
import Home from '../Home/Home'
import Products from '../Products/Products'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element ={<RootLayout />}>
      <Route index  element={<Home/>}/>
      <Route path ='/produits' element={<Products/>}/>
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
