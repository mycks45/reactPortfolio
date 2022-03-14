import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp, BsInstagram} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rpj3kei', 'template_f2w1lia', form.current, 'T9cTW2iiSo5qmsxbR')
      .then((result) => {
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Mycks45@gmail.com</h5>
            <a href="mailto:mycks45@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 9539335035</h5>
            <a href="https://wa.me/9539335035">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@harshad__pk__</h5>
            <a href="https://wa.me/9539335035">Send a Message</a>
          </article>
        </div>

        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact