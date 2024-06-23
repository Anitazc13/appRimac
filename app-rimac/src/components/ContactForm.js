// src/components/ContactForm.js
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Textbox from './textbox/Textbox';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    celular: '',
    email: '',
    acceptPolicy: false // Estado para aceptar la política de comunicaciones (checkbox)
  });
  const [captchaValue, setCaptchaValue] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAcceptPolicyChange = () => {
    setFormData({
      ...formData,
      acceptPolicy: !formData.acceptPolicy
    });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert('Please, complete the reCAPTCHA.');
      return;
    }

    console.log('Form Data:', formData);
  };

  return (
    <><div className="container">
      <h1>Mide tu nivel de ansiedad</h1>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombres y Apellidos</label>
            <Textbox
              id="name"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="celular">Celular</label>
            <Textbox
              id="celular"
              placeholder="Celular"
              name="celular"
              value={formData.celular}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Textbox
              id="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              s onChange={handleChange} />
          </div>
        </form>
      </div>
    </div><div className="policy-container">
        <label>Al continuar acepto la Politica de Privacidad</label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={formData.acceptPolicy}
            onChange={handleAcceptPolicyChange} />
          Acepto la política de comunicaciones
        </label>
      </div><div className="form-catpcha">
        <ReCAPTCHA
          sitekey="your-recaptcha-site-key"
          onChange={handleCaptchaChange} />
      </div></>
  );
};

export default ContactForm;
