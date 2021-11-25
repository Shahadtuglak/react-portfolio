import React from "react";
import "../App.css";

import img1 from "../image/img1.jpg";


const Blog = () =>{
    return(
        <>
        <h1 className="text-center mt-3">Blog</h1>
        <div className="blog">
        <img src={img1} alt="image1"/>
            <img src={img1} alt="image1"/>
            <img src={img1} alt="image1"/>
         
            <img src={img1} alt="image1"/>
            <img src={img1} alt="image1"/>
           
            <img src={img1} alt="image1"/> 
            <img src={img1} alt="image1"/>

            


        </div>



        </>
    )

}


export default Blog;