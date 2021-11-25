import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import img1 from "../image/img1.jpg";


const Card = (props) =>{
    return(
            <div classNameName="card">
                <img className="card-img-top" src={img1} alt="Card"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <Link to="" className="btn btn-primary"> Explore More</Link>
                </div>
            </div>








        
    )
    

}

export default Card;