import React from 'react';
import './button.css'

export default function Button({ text, id, className, type = "button", onClick, icon }) {
  return (
    <button
      id={id}
      className={`btn ${className}`}
      type={type}
      onClick={onClick}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {text}
    </button>
  );
}
