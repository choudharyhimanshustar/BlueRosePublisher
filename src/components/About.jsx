import React from 'react'
import './About.css';
import { SlBadge } from 'react-icons/sl';
import { BsFileCheck } from 'react-icons/bs';
import myImage from '../assests/HimanshuImage.jpg'

/* Gives a brief description about me. Simple HTML tags are used such as <article> for article.  */
const About = () => {
  return (
    <div id="about">
      <h2>
        About Me
      </h2>
      <div className='about_container'>
        <div className='about_me'>
          <img src={myImage} className='about_image' />
        </div>
        <div>


          
          <p className='description'>
            
Choudhary Himanshu is a seasoned corporate trainer, and an inspiring speaker with passion for strategy and governance with an adoring commitment to developing the next generation. Himanshu always believes that the workplace in particular and the world in general present a lot of opportunities but people are not ready to go through the process. His messages bring hope and future to the youth. Himanshu prepares leaders for higher assignments.
          </p>
        </div>
      </div>

    </div>

  )
}

export default About

/* Section about me. A picture is used and cards are used to describe experience and projects. */