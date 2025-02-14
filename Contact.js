import React from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have a question or need assistance? Feel free to reach out to us using the contact information below:</p>
      <ul>
        <li>Email: subhampatra.118920@marwadiuniversity.ac.in</li>
        <li>Phone: +917735592760</li>
        <li>Address: 123 Main Street, City, Country</li>
      </ul>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
}

export default Contact;
