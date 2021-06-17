import React from 'react';
import {IconContext} from "react-icons";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const AboutUsPage = () => (
    <div>
      <h1 className="about-title">Developed and Designed by Mohit Chaukiker</h1>
      <div className="icons">
      <a href="https://github.com/MohitC1510" target="_blank"  >
         <FaGithub size={70} />
     </a>
      <a href="https://www.linkedin.com/in/mohit-chaukiker-41138517a/" target="_blank" style={{color:'#2867B2'}} >
         <FaLinkedin size={70} />
     </a>
      </div>
    </div>
  );
  export default AboutUsPage;