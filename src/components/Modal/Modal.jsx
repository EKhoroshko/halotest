import React, { useEffect } from 'react';
import { createPortal } from "react-dom";
import cn from 'classnames';
import close from '../../img/x-min.svg';
import Form from '../Form/Form';
import cardcss from '../Card/Card.module.css'
import css from './Modal.module.css';

const modalRoot = document.querySelector("#modal-root");

function Modal({ onClose, name, category, price }) {
  const closeKeyDawn = (e) => {
    if (e.code === "Escape") {
      onClose()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", closeKeyDawn);
    return () => {
      window.removeEventListener("keydown", closeKeyDawn)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return createPortal(
    <div className={css.ModalOverlay} onClick={closeOverlay}>
      <div className={css.ModalWindow}>
        <button
          type="button"
          onClick={onClose}
          className={css.CloseModalBtn}>
          <img src={close} alt="" width={16} height={16} />
        </button>
        <div className={css.modalDescr}>
          <p className={cardcss.cardCategory}>{category}</p>
          <h3 className={cn(cardcss.cardTitle, cardcss.cardTitleModal)}>{name}</h3>
          <p className={cardcss.cardPrise}><span className={cardcss.cardSimvol}>$</span>{price}</p>
        </div>
        <Form />
      </div>
    </div >
    , modalRoot
  )
}

export default Modal;