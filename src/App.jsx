import Home from "./components/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./components/login";
import Register from "./components/register";
import { Routes, Route } from "react-router-dom";
import Post from "./components/post";
import CreatePost from "./components/createPost";
import EditPost from "./components/editPost";
import ProfileForm from "./components/profile"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/posts/post/:slug" element={<Post />}></Route>
        <Route path="/write" element={<CreatePost/>}></Route>
        <Route path="/edit/:id" element={<EditPost/>}></Route>
        <Route path="/profile/:id" element={<ProfileForm/>}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
