import React from 'react';
import PropTypes from 'prop-types';
import './Infocard.css'; 

const Infocard = ({ title, description, buttonText, imgsrc }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="info-button">{buttonText}</button>
      </div>
      <div className="image-card">
        <img src={imgsrc} alt="Card Image" />
      </div>
    </div>
  );
};

Infocard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired, // Asegúrate de añadir esta PropTypes para la imagen
};

export default Infocard;
