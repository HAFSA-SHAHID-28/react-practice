import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Service from "./Service"
import Contact from "./Contact"
import Blog from "./Blog"
import PageNotFound from "./PageNotFound"
import Post from "./Post"
import Layout from "./Layout"
import UserLayout from "./UserLayout"
import { fetchPosts, fetchPostsD } from "./data"
import PostDetail from "./PostDetail"

const Main = () => {

  /////////////////////////////////     1st Method (by using object)
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element:<Home/>,
  //     children:[
  //       {
  //         path: "/home",
  //         element:<Home/>
  //       },{
  //         path: "/about",
  //         element:<About/>
  //       },{
  //         path: "/service",
  //         element:<Service/>
  //       },{
  //         path: "contact",
  //         element:<Contact/>
  //       },{
  //         path: "*",
  //         element:<PageNotFound/>
  //       }
  //     ]
  //   }
  // ])



  /////////////////////////////////////////////////// 2nd Method (by using jsx)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />

          <Route 
          loader={fetchPosts} 
          path="/products" 
          errorElement={<h1>My Custom Error</h1>} 
          element={<Post />} 
          />

          <Route 
          loader={({params}) => fetchPostsD()} 
          path="/products/:id" 
          errorElement={<h1>My Custom Error</h1>} 
          element={< PostDetail/>} 
          />
          

        </Route>



        <Route path="/signup" element={<h1>Signup</h1>} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="/user" element={<UserLayout />}>
          <Route path="user" element={<h1>User Dashboard</h1>} />
          <Route path="settings" element={<h1 className="display-2">Setting Page</h1>} />
          <Route path="posts" element={<h1 className="display-2">User Post Page</h1>} />
        </Route>
      </>
    )
  )






  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default Main