import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

const Badge = ({ text, color, backgroundColor }) => {
  return (
    <div className="badge" style={{ color, backgroundColor }}>
      {text}
    </div>
  );
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Badge.defaultProps = {
  color: '#fff',
  backgroundColor: '#007bff',
};

export default Badge;
