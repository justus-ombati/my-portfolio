// src/components/Portfolio/Contacts.js
import React from 'react';
import emailimg from '../images/mail.png'
import phoneimg from '../images/telephone.png'

const Contacts = (
) => {
  return (
    <div className="contacts-container">
      <h2>Contacts</h2>
     
      <div className='contactsdiv'>
        <div className='addressdiv'>
          <img src={emailimg}/>
          <label>00100, Nairobi</label>
          <label>01100, Kajiado</label>
        </div>
        <div className='phonediv'>
          <img src={phoneimg}/>
          <label>+254795718890</label>
          <label>+254758088156</label>
        </div>
      </div>

      <div className='emaildiv'>
        <label>Name</label>
        <textarea>Enter your full name</textarea>
        <label>Email Address</label>
        <input placeholder='Enter your email address'></input>
        <label>Message</label>
        <textarea placeholder='Enter your message here'></textarea>
        <button >Send Message</button>
      </div>

    </div>
  );
};

export default Contacts;
