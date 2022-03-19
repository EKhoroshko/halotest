/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { blockScroll, unBlockScroll } from '../../helpers/Body'
import css from './Card.module.css';

function Card({ name, category, price }) {
  const [isActive, setIsActive] = useState(false);

  const openModal = () => {
    setIsActive(!isActive);
    if (isActive === false) {
      blockScroll();
    } else {
      unBlockScroll();
    }
  };

  return (
    <li className={css.card}>
      <a className={css.cardHover} href="#">
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

      </a>
    </li>
  )
}

export default Card