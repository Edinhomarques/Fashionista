import React from 'react';

import Product from '../../components/Product/Product';

import './ProductList.css'

export default function ProductList(){
  return (
    <section className="productsList">
      <div className="container">
        <div className="productsList__grid">
          <Product />
          <Product />
        </div>
        
      </div>
      
    </section>
  )
}