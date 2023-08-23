import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Root from './pages/Root'
import Gallery from './pages/Gallery'
import Cart from './pages/Cart'
import Home from './pages/Home'

const router = createBrowserRouter([
  {path: '', element: <Root/>, children:[
    {path: '/', element:<Home/>},
    {path:'/gallery', element:<Gallery/>},
    {path:'/cart', element:<Cart/>}
  ]}
])


const App=()=> {
  return <RouterProvider router={router}/>
}

export default App
