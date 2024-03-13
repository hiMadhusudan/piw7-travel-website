import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../images/bali.jpg'; // Import your background image

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // You can send the form data to an API, or handle it in any other way
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '90vh', /* Full height of the viewport */
      backgroundImage: `url(${backgroundImage})`, // Set the background image
      backgroundSize: 'cover', // Make sure the background image covers the entire container
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // Add transparency to the background color
    },
    formContainer: {
      padding: '4%', /* Adjust padding as needed */
      maxWidth: '600px', /* Fixed width for the form */
      width: '100%',
      backgroundColor: 'rgba(248, 249, 250, 0.4)', /* Add background color with transparency */
      borderRadius: '10px', /* Add border radius for rounded corners */
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)', /* Add box shadow for depth */
    },
    title: {
      textAlign: 'center',
      color: 'gray',
      marginBottom: '10px',
    },
    form: {
      width: '100%',
    },
    textarea: {
      height: '100px', /* Adjust height of the textarea */
    },
    button: {
      width: '100%',
    }
  };

  return (
    <div className="contact-form-container" style={styles.container}>
      <div className="contact-form" style={styles.formContainer}>
        <h2 style={styles.title}>Contact Us</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-control" style={styles.textarea}></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
