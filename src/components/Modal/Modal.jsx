import React from 'react';
import { createPortal } from "react-dom";
import close from '../../img/x-min.svg';
import Form from '../Form/Form'
import css from './Modal.module.css';

const modalRoot = document.querySelector("#modal-root");

function Modal({ onClose, name, category, price }) {

  return createPortal(
    <div className={css.ModalOverlay} >
      <div className={css.ModalWindow}>
        <button
          type="button"
          onClick={onClose}
          className={css.CloseModalBtn}>
          <img src={close} alt="" width={16} height={16} />
        </button>
        <div>
          <p>{category}</p>
          <h3>{name}</h3>
          <div >
            <p><span>$</span>{price}</p>
          </div>
        </div>
        <Form />
      </div>
    </div >
    , modalRoot
  )
}

export default Modal;