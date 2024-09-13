import React from 'react'
import CV from '../assests/ChoudharyHimanshu_Resume.pdf';
import './Header.css';
/* Importing various icons from 'react-icons' */
import { FaLinkedin } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import myImage from '../assests/HimanshuImage.jpg'
/* Contains image, heading, Social Handles */
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className='heading'>
          <h3>
            Hi, I am
          </h3>
          <h1>
            Choudhary Himanshu
          </h1>
          <h5>
            Book Worm
          </h5>
          <img src={myImage} className='profile_img' />
        </div>


        

      </div>
    </header>
  )
}

export default Header
