import React from 'react';
import css from './Button.module.css'

function Button({ text, type, onClick, children, className = css.button }) {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}>
      {text}
      {children}
    </button>
  )
}

export default Button