import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Textbox from './textbox/Textbox';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    celular: '',
    email: '',
    acceptPolicy: false
  });
  const [captchaValue, setCaptchaValue] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAcceptPolicyChange = () => {
    setFormData({
      ...formData,
      acceptPolicy: !formData.acceptPolicy
    });

    if (!formData.acceptPolicy) {
      setIsModalVisible(true);
    } else {
      setIsModalVisible(false);
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert('Por favor, completa el reCAPTCHA.');
      return;
    }

    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <h1 className='label-title mb-16 fs-24'>Mide tu nivel de estrés</h1>
          <div className="form-group">
            <label className={"label-title"} htmlFor="name">Nombre y Apellido</label>
            <Textbox
              id="name"
              placeholder="Nombre y Apellido"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className={"label-title"} htmlFor="celular">Celular</label>
            <Textbox
              id="celular"
              placeholder="Celular"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className={"label-title"} htmlFor="email">Correo</label>
            <Textbox
              id="email"
              placeholder="Correo"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {/*<button type="submit">Enviar</button>*/}
        </form>
      </div>

      <div className="policy-container">
            <label className='mt-16'>Al continuar la </label>
            <a className="underline mt-16" target="_blank" rel="noopener noreferrer" href="https://www.rimac.com/politica-privacidad">Política de Privacidad</a>
            <label className="checkbox-label mt-8">
              <input
                type="checkbox"
                checked={formData.acceptPolicy}
                onChange={handleAcceptPolicyChange}
              />
              Acepto la Política de Comunicaciones Comerciales
            </label>
          </div>
          <div className="form-captcha">
            <ReCAPTCHA
              sitekey="your-recaptcha-site-key"
              onChange={handleCaptchaChange}
            />
          </div>
          
      {isModalVisible && (
        <div className="modal-background" onClick={() => setIsModalVisible(false)}>
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setIsModalVisible(false)}>
                &times;
              </span>
              <h3 className='mb-16 weight-600 lh-15'>POLÍTICA DE ENVÍO DE COMUNICACIONES COMERCIALES</h3>
              <div>
                <p className="spaced-paragraph justify-text">
                  Autorizo a RIMAC a utilizar mis Datos Personales y que los mismos sean tratados por terceros, para que me sean ofrecidos beneficios, productos y servicios de RIMAC, a través de cualquier medio de comunicación. Declaro conocer que el no conceder esta autorización no afectará la prestación del servicio contratado.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
