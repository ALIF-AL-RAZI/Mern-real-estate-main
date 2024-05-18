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
import ProfilePage from "./routes/profilePage/ProfilePage";
import NewPostPage from "./routes/newPostPage/NewPostPage";
import Register from "./routes/register/register";

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
        {
          path: "/profile",
          element: <ProfilePage/>
        },

        {
          path: "/newPost",
          element: <NewPostPage/>
        },

        {
          path: "/register",
          element: <Register/>
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