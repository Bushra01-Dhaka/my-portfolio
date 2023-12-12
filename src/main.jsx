import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-black'>
    <div className='md:max-w-screen-lg mx-auto'>
    <RouterProvider router={router} />
    </div>
    </div>
  </React.StrictMode>,
)
