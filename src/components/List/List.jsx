import React from 'react'
import { useSelector } from 'react-redux';
import { getProducts } from '../../redax/product/selectors';
import { v4 as uuidv4 } from 'uuid';
import Card from '../Card/Card';
import css from './List.module.css'

function List() {
  const prod = useSelector(getProducts);
  const list = prod.slice(0, 6)

  return (
    <ul className={css.list}>
      {list && list.map(item => <Card
        key={uuidv4()}
        name={item.name}
        category={item.category}
        price={item.price}
      />)}
    </ul>
  )
}

export default List