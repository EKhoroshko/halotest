import React, { useState } from 'react';
import { ReactComponent as Arrow } from '../../img/arrow.svg';
import cn from 'classnames';
import Button from '../Button/Button'
import css from './Form.module.css';
import but from '../Button/Button.module.css'

function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState("");

  const changeName = (e) => {
    setName(e.target.value)
  }

  const changePhone = (e) => {
    setPhone(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault()
    console.log("tyty");
    clearForm();
  }

  const clearForm = () => {
    setName("");
    setPhone("");
  }

  return (
    <form
      className={css.form}
      onSubmit={submitForm}>
      <input
        className={css.formInput}
        type="text"
        placeholder="Name"
        value={name}
        onChange={changeName}
        required
      />
      <input
        className={cn(css.formInput, css.formInputMargin)}
        type="tel"
        placeholder="Number"
        value={phone}
        onChange={changePhone}
        pattern="[0-9]{12}"
        required
      />
      <Button text="ORDER" type="submit" onSubmit={submitForm} className={cn(but.button, but.buttonSubmit)}>
        <Arrow className={but.buttonArrow} />
      </Button>
    </form>
  )
}

export default Form