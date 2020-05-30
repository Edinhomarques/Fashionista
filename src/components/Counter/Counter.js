import React from 'react';
import './Counter.css';
export default function Counter({count}){
  return (
    <sup className="count">
      <span className="count__value">{count}</span>
    </sup>
  )
}

Counter.defaultProps = {
  count: 0
}