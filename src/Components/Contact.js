import React from "react";
import "../App.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "@mui/material";


const Contact = () =>{

    return(
        <>
          <h1 className="text-center mt-3">KEEP IN TOUCH</h1>
        <div className="contact">
             <h3>MOBILE NO. : +91 8952992059</h3>
             <h3>E-MAIL : tuglakshahad@gmail.com</h3>
        </div>
        <div className="iconSection">
          <Link href="https://www.instagram.com/_shahad_tuglak_/?hl=en" className="icon">
            <InstagramIcon/>
          </Link>

          <Link href="https://github.com/Shahadtuglak" className="icon">
            <LinkedInIcon/>
          </Link>

          <Link to="https://www.linkedin.com/in/shahad-tuglak-29a955144/" className="icon">
            <GitHubIcon/>
          </Link>
          

        </div>


        </>
    )

}


export default Contact;