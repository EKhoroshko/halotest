import React, { useState } from 'react'
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import css from './Card.module.css'

function Card({ name, category, price }) {
  const [isActive, setIsActive] = useState(false);

  const openModal = () => {
    setIsActive(!isActive);
  };

  return (
    <li className={css.card}>
      <p className={css.cardCategory}>{category}</p>
      <h3 className={css.cardTitle}>{name}</h3>
      <div className={css.cardBox}>
        <p className={css.cardPrise}><span className={css.cardSimvol}>$</span>{price}</p>
        <Button text="buy" type="button" onClick={openModal} />
        {isActive && (
          <Modal
            name={name}
            category={category}
            price={price}
            onClose={openModal}
          />
        )}
      </div>
    </li>
  )
}

export default Card