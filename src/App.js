import React from 'react';
import './App.css';

//Library
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Route, Routes } from 'react-router';

//Components
import Navbar from './Components/Navbar';
import About from './Components/About';
import Project from './Components/Project';
import Contact from "./Components/Contact";
import Template from './Components/Template';
import Blog from "./Components/Blog";
import Footer from './Components/Footer';
import Home from './Components/Home';

const App = () =>{
  return(
    <div className="App">
      <Navbar/>
     
     
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/template" element={<Template/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      {/* <About/> */}
      <Footer/>

     
      



    </div>
  )
}
export default App;
