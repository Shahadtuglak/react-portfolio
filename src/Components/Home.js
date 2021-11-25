import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Home(){
    return(
        <>
            <div className="homepage">
                <h3>Hello</h3>
                <h3>I am Shahad Tuglak</h3>
                <h3>A Front End Web Developer</h3>
               <Link className="btn btn-success" to="/contact">Contact Me</Link>
            </div>



        </>
    )
}

export default Home;