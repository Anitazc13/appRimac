// src/components/Button.js
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  type = 'primary',
  text = '',
  onPress = () => {},
  selected = false,
}) => {
  const buttonClass = selected ? 'button selected' : 'button';

  return (
    <button className={buttonClass} onClick={onPress}>
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
};

export default Button;
