import React from 'react'
import './Footer.css';
const Footer = () => {
  const date = new Date();
  return (
    <footer>
  Choudhary Himanshu © {date.getFullYear()}
    </footer>
  )
}

export default Footer