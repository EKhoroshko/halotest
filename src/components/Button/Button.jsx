import React from 'react';
import css from './Button.module.css'

function Button({ text, type, onClick }) {
  return (
    <button
      className={css.buttonBox}
      onClick={onClick}
      type={type}>
      {text}
    </button>
  )
}

export default Button