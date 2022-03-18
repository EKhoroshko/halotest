import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import cn from 'classnames';
import List from '../List/List';
import Modal from '../Modal/Modal'
import Button from '../Button/Button';
import { getProducts } from '../../redax/product/selectors';
import { filterMin } from '../../helpers/FilterMin'
import css from './Container.module.css';
import but from '../Button/Button.module.css';

function Container() {
  const prod = useSelector(getProducts);
  const [min, setMin] = useState();
  const [isActive, setIsActive] = useState(false);

  const openModal = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    setMin(filterMin(prod))
  }, [prod]);

  return (
    <div className={css.box}>
      <List />
      <Button
        text="Buy cheapest"
        type="button"
        className={cn(but.button, but.bigButton)}
        onClick={openModal} />
      {isActive && (
        <Modal
          name={min.name}
          category={min.category}
          price={min.price}
          onClose={openModal}
        />
      )}
    </div>
  )
}

export default Container