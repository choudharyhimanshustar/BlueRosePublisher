import React, { useRef } from 'react';
import emailjs from 'emailjs-com'/* Emailjs is used for recieving mail from people when they send a message to you */
import './Contact.css';
import { AiFillMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
/* Even I don't understand what is written from line 9 to line 21. I have done it through EmailJS documentation. It helps for recieving messages. */
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nfp3j0s', 'template_wpbghak', form.current, '4beVQdEf9zrVOEdHT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div id="contact">
      <h2>
        Contact
      </h2>
      <div className='Contacts_container'>
        <div>
          <div className='handles'>
            <AiFillMail className='icons' />

            <a href="mailto:himanshuch3003@gmail.com" className='btn'>Send a mail</a>
          </div>



          <div className='handles'>
            <BsWhatsapp className='icons' />

            <a href="https://wa.me/9627314738" className='btn'>Whatsapp Me</a>
          </div>


          <div className='handles'>
            <AiFillInstagram className='icons' />

            <a href="https://www.instagram.com/direct/t/17850429296660292/" className='btn'>DM me</a>
          </div>
        </div>


        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name="name" placeholder='Enter Name' required />
          <input type='email' name='email' placeholder='Enter Email' required />
          <textarea rows="3" name="message" placeholder='Your Message' />
          <button type="submit" className='btn key'>Send Message</button>
        </form>
      </div>
    </div>



  )
}

export default Contact