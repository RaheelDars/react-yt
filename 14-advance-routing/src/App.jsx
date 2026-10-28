import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Man from "./pages/Man";
import Women from "./pages/Women";
import Courses from "./pages/Courses";
import CoursesDetail from "./pages/CoursesDetail";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div className="h-screen bg-black text-white ">
      <Navbar />
      <Navbar2/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/courses/:coursesId" element={<CoursesDetail/>}/>
        <Route path="/product" element={<Product />}>
          <Route path="man" element={<Man />} />
          <Route path="women" element={<Women />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
