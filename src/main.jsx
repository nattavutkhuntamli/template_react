import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Blog from './pages/Blog/Blog';
import Login from './pages/Login/Login';
const router = createBrowserRouter([
  {
      path:"/",
      element:<Home/>
  },
  {
      path:"/about",
      element:<About/>
  },
  {
      path:"/service",
      element:<Services/>
  },
  {
      path:"/blog",
      element:<Blog/>
  },
  {
      path:"/contact",
      element:<Contact/>
  },
  {
      path:"/login",
      element:<Login/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
