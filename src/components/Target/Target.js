import React from 'react';

import './Target.css'

export default function Target({discount}){
  return (
    <div className="target">
      <span>{discount}</span>
    </div>
  )
}