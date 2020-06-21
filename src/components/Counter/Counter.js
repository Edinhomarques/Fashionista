import React, { useContext, useEffect, useState } from 'react';
import './Counter.css';
import { CartContext } from '../../context/CartContext/CartContext';

export default function Counter( ){
  const [counter, setCounter] = useState()
  const {selectedProduct} = useContext(CartContext)
 
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart'))
    setCounter(items)
  }, [selectedProduct])
  const count = counter ? counter.cart.length : 0
  return (
    <sup className="count">
      <span className="count__value">{count}</span>
    </sup>
  )
}

Counter.defaultProps = {
  count: 0
}