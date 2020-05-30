import React from 'react';

import Target from '../Target/Target'

import './Product.css'

export default function Product() {
  return (
    <div className="product">
      <a href="/">
        <div className="product__header">
          {false && <Target discount={'50%'}/> }
          <img className="product__photo" src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg" alt="" />
        </div>
        <div className="product__footer">
          <span className="product__name">VESTIDO TRANSPASSE BOW</span>
          <div className="product__price">
            <span className={`product__price ${false ? 'product__price--discount' : '' }`}>R$ 199,90</span>
            {false && <span className="product__price">R$ 159,90</span>}
          </div>
        </div>
      </a>
    </div>
  )
}