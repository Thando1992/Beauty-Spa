import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home.jsx'
import Pricelist from './Pages/Pricelist.jsx';
import About from './Pages/About';
import Gallary from './Pages/Gallary';
import GuesthouseService from './Pages/GuesthouseService';
import Treatments from './Pages/Treatments';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/pricelist",
    element: <Pricelist/>,
  },

{
   path: "/About us",
   element: <About us/>,
},

{
  path: "/Gallary",
  element: <Gallary/>,
},
{
  path: "/GuesthouseService",
  element: <GuesthouseService/>,
},

{
  path: "/Treatments",
  element: <Treatments/>,
}

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
  