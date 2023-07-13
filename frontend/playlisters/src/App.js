import React from "react";
import SignUpPage from "./components/Signup";
import Signin from "./components/Signin";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Add from "./components/Add";
import Profile from "./components/Profile";
import AddVideos from "./components/AddVideos";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter basename="/">
    //   <Navbar />

    //   <Signin />
    // </BrowserRouter>

    <Router>
      <Navbar />
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/signin">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav> */}
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/addvideo" element={<AddVideos />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
