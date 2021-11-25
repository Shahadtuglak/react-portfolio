import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


const Navbar = () =>{

    return(
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/home">Shahad Tuglak</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav ms-auto">
                
                   
                    <Link className="navLinks"  exact to="/home">Home</Link>
                    <Link className="navLinks" exact to="/about">About Me</Link>
                    <Link className="navLinks" exact to="/project">My Projects</Link>
                    <Link className="navLinks" exact to="/blog">My Blog</Link>
                    <Link className="navLinks" exact to="/contact">Contact Me</Link>
                

               
            </div>
   
  </div>
</nav>
       


        </>
    )


}


export default Navbar;