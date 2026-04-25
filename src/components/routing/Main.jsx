import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Blog from "./Blog"
import Service from "./Service"
import PageNotFound from "./PageNotFound"
import Post from "./Post"
import PostDetail from "./PostDetail"


const Main = () => {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home#7" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/service" element={<Service />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default Main