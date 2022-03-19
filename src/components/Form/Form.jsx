import React, { useState } from 'react';
import { ReactComponent as Arrow } from '../../img/arrow.svg';
import cn from 'classnames';
import Button from '../Button/Button';
import { cheakNum } from '../../helpers/cheakNum'
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
    if (cheakNum(name) !== undefined) {
      setNameError('Only letters allowed')
    } else if (!name) {
      setNameError('This field in required')
    } else {
      setNameError("")
    }
  }

  const handlerBlurNumber = () => {
    setPhoneInput(true);
    setNumberFocus(false);
    if (phone.length < 12 || phone.length > 12) {
      setPhoneError("Should contain 12 characters")
      if (!phone) {
        setPhoneError('This field in required')
      }
    } else {
      setPhoneError('')
    }
  }

  const submitForm = (e) => {
    e.preventDefault()
    if (nameError === "" &&
      phoneError === "" &&
      name !== "" &&
      phone !== "") {
      const submit = {
        name,
        phone,
      }
      console.log(submit);
      clearForm();
    } else {
      setPhoneInput(true);
      setNameInput(true);
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
            [css.valid]: name.length >= 1 && nameFocus === false,
            [css.err]: nameError.length > 0,
            [css.formInput]: nameFocus === true,
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
            [css.valid]: phone.length === 12 && numberFocus === false,
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