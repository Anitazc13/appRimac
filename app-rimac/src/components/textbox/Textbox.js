// src/components/Textbox.js
import React, { useState } from 'react';
import './Textbox.css';

const Textbox = ({ placeholder, icon, value, name, onChange }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={`textbox-container ${focus ? 'focus' : ''}`}>
      {icon && <span className="icon">{icon}</span>}
      <input
        type="text"
        className="textbox"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        required
      />
    </div>
  );
};

export default Textbox;
