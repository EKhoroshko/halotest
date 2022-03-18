import React from 'react'
import List from '../List/List';
import Button from '../Button/Button';
import css from './Container.module.css'

function Container() {
  return (
    <div className={css.box}>
      <List />
      <Button text="Buy cheapest" type="button" />
    </div>
  )
}

export default Container