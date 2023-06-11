import React from 'react'
import Peppersoup from '../assets/Pepper-soup.jpg';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'  style={{ backgroundImage: `url(${Peppersoup})` }}></div>
        <div className='rightSide'>
            <h1> Contact Us</h1>

            <form id='contact-form' method='POST'>
                <label htmlfor='name'>Full Name</label>
                <input name='name' placeholder='Enter full name ...' type='text'/>
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Enter email...' type='email'/>
                <label htmlFor='message'>Message</label>
                <textarea rows='7' placeholder='Enter message...' name='message' required ></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}
