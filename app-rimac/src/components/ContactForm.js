import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [captchaValue, setCaptchaValue] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log(value, 'value')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate
    if (!captchaValue) {
      alert('Please, try the reCAPTCHA.');
      return;
    }
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />

      <ReCAPTCHA
        sitekey="6LcgGf8pAAAAAN5E9I-545Eo4LKAcYPdVqOBJcEf"
        onChange={handleCaptchaChange}
      />

      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
