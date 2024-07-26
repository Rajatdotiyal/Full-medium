import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { Blog } from "./pages/Blog"
import { Blogs } from "./pages/Blogs"
import { Publish } from "./pages/Publish"


function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            
              <Route path="/" element ={<Navigate to={"/signin"}/>}/>
              <Route path="/signin" element ={<Signin/>}/>
              <Route path="/signup" element = {<Signup/>}/>
              <Route path="/blog/:id" element = {<Blog/>}/>
              <Route path="/blogs" element = {<Blogs/>}/>
              <Route path="/publish" element = {<Publish/>}/>
          </Routes>
        </BrowserRouter>

    </div>
       
  )
}

export default App
