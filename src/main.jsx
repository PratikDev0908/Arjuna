import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Problem from './components/Problem/Problem.jsx'
import Event from './components/Event/Event.jsx'
import Team from './components/Team/Team.jsx'
import Contact from './components/Contact/contact.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/problem' element={<Problem/>} />
      <Route path='/event' element={<Event/>} />
      <Route path='/team' element={<Team/>} />
      <Route path='/contact' element={<Contact/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
