import React, { useRef } from 'react'
import '../styles/contact.css'
import { SlEnvolopeLetter } from 'react-icons/sl'
import { RiMessengerLine } from 'react-icons/ri'
import { ImWhatsapp } from 'react-icons/im'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7idhc4p', 'template_ytjtv5j', form.current, 'Z2CD69r0_1p7yfAl2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <SlEnvolopeLetter className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jehp01104006@gmail.com</h5>
            <a href="mailto:jehp01104006@gmail.com" target='_blank'>Send a messege</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Juan Hernandez</h5>
            <a href="https://www.facebook.com/messages/t/100010923187722" target='_blank'>Send a messege</a>
          </article>
          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+57 3044245178</h5>
            <a href="https://wa.me/3044245178" target='_blank'>Send a messege</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="messege" rows="7" placeholder='Your Messege' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Messege</button>
        </form>
      </div>
    </section>
  )
}

export default Contact