import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import GlobalStyled from './GlobalStyled.js'


const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    children:[
      {
      path:'/' ,
      element: <Home/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyled/>
  </StrictMode>,
)
