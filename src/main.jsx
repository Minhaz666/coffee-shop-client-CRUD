import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffe from './Components/AddCoffe.jsx';
import UpdateCoffe from './Components/UpdateCoffe.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>{return fetch('http://localhost:5000/coffee')}
  },
  {
    path: "/addcoffee",
    element: <AddCoffe></AddCoffe>,
  },
  {
    path: "/updatecoffee/:id",
    element: <UpdateCoffe></UpdateCoffe> ,
    loader:({params})=>{return fetch(`http://localhost:5000/coffee/${params.id}`)}
  },
  {
    path: '/addcoffees',
    element: <AddCoffe></AddCoffe>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
