// src/components/Textarea.js
import React, { useState } from 'react';
import './Textarea.css';

const Textarea = ({ placeholder, value, name, onChange }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={`textarea-container ${focus ? 'focus' : ''}`}>
      <textarea
        className="textarea"
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

export default Textarea;
