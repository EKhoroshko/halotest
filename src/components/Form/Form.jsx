import React, { useState } from 'react';
import { ReactComponent as Arrow } from '../../img/arrow.svg';
import cn from 'classnames';
import Button from '../Button/Button'
import css from './Form.module.css';
import but from '../Button/Button.module.css'

function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState("");
  const [nameInput, setNameInput] = useState(false);
  const [phoneInput, setPhoneInput] = useState(false);
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [nameFocus, setNameFocus] = useState(false);
  const [numberFocus, setNumberFocus] = useState(false);

  const changeName = (e) => {
    setName(e.target.value)
  }

  const changePhone = (e) => {
    setPhone(e.target.value)
  }

  const handlerFocusNumber = () => {
    setNumberFocus(true);
    setPhoneError("");
  }

  const handlerFocusName = () => {
    setNameFocus(true);
    setNameError("");
  }

  const handlerBlurName = () => {
    setNameInput(true)
    setNameFocus(false);
    if (name.length < 5) {
      setNameError('Name must be more than 5 letters')
      if (!name) {
        setNameError('Name field cannot be empty')
      }
    } else {
      setNameError("")
    }
  }

  const handlerBlurNumber = () => {
    setPhoneInput(true);
    setNumberFocus(false);
    if (phone.length < 12) {
      setPhoneError("Must be 12 characters")
      if (!phone) {
        setPhoneError('Phone field cannot be empty')
      }
    } else {
      setPhoneError('')
    }
  }

  const submitForm = (e) => {
    e.preventDefault()
    if (nameError !== "" && phoneError !== "") {
      const submit = {
        name,
        phone,
      }
      console.log(submit);
      clearForm();
    } else {
      setNameError("Fill in required fields")
      setPhoneError("Fill in required fields")
    }
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
        className={cn(css.formInput,
          {
            [css.valid]: name.length >= 5,
            [css.err]: nameError.length > 0,
            [css.formInput]: nameFocus,
          }
        )}
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => changeName(e)}
        onBlur={handlerBlurName}
        onFocus={handlerFocusName}
      />
      {(nameInput && nameError) && <p className={css.error}>{nameError}</p>}

      <input
        className={cn(css.formInput,
          {
            [css.valid]: phone.length >= 12,
            [css.err]: phoneError.length > 0,
            [css.formInput]: numberFocus === true,
          }
        )}
        type="number"
        name="phone"
        placeholder="Number"
        value={phone}
        onChange={e => changePhone(e)}
        pattern="[0-9]{12}"
        onBlur={handlerBlurNumber}
        onFocus={handlerFocusNumber}
      />
      {(phoneInput && phoneError) && <p className={css.error}>{phoneError}</p>}
      <Button text="ORDER" type="submit" onSubmit={submitForm} className={cn(but.button, but.buttonSubmit)}>
        <Arrow className={but.buttonArrow} />
      </Button>
    </form>
  )
}

export default Form