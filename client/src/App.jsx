import { Children } from "react";
import Navbar from "./components/navbar/Navbar"

import HomePage from "./routes/homePage/HomePage"
import Layout from "./routes/layout/Layout";
import ListPage from "./routes/listPage/ListPage"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Singlepage from "./routes/singlepage/Singlepage";
import Login from "./routes/login/Login";

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>
        },
        {
          path: "/:id",
          element: <Singlepage/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        
      ]
    }
  ]);



  return (


    <RouterProvider router={router}>
      
    </RouterProvider>
    
  )
}

export default App